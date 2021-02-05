import { GameBoard } from "./GameBoard";
import { boardLocation, Team, unit } from "../../types/types";
import { Unit } from "../Unit";

//class GameBoardAction responsible for general actions on board which help define how unit can behave yourself
export class GameBoardAction {
  gameBoard: GameBoard;

  constructor(gameBoard: GameBoard) {
    this.gameBoard = gameBoard;
  }

  getUnitLocation(unit: Unit): boardLocation | null {
    // cause unit can't be exist
    let isFound = false;
    let columnNumber = 0;
    let rowNumber = 0;

    this.gameBoard.getBoardMatrix().every((row) => {
      // this method is moving from row to row and try to find necessary unit
      const unitIndex: number = row.findIndex((necUnit) => necUnit === unit);
      if (unitIndex === -1) {
        rowNumber += 1;
      } else {
        isFound = true;
        columnNumber = unitIndex;
        return false;
      }
      return true;
    });

    if (isFound) {
      return {
        rowNumber,
        columnNumber,
      };
    } else {
      return null;
    }
  }

  getUnitByLocation(boardLocation: boardLocation): unit {
    if (boardLocation) {
      return this.gameBoard.getBoardMatrix()[boardLocation.rowNumber][
        boardLocation.columnNumber
      ];
    }
    return null;
  }

  getUnitCondition(boardLocation: boardLocation): boolean {
    //to check: is unit alive or not
    return Boolean(
      this.gameBoard.getBoardMatrix()[boardLocation.rowNumber][
        boardLocation.columnNumber
      ]
    );
  }

  deleteUnits<TUnit>(unit: TUnit | null): unit is TUnit {
    return unit !== null;
  }

  getUnitTeam(unitBoardLocation: boardLocation): Team {
    return unitBoardLocation.rowNumber <
      Math.floor(this.gameBoard.getBoardMatrix().length / 2) //because we have odd count of rows and on top side one team and on bottom side - other team
      ? Team.redTeam
      : Team.orangeTeam;
  }

  getEnemyNeighborLocation(unitBoardLocation: boardLocation) {
    //method for melee units who can attack depends on their location on board
    const neighborUnitLocation: boardLocation[] = [];
    const team = this.getUnitTeam(unitBoardLocation);
    let indexDirection = 0;
    if (team === Team.redTeam) {
      //red team is team on top => to check their enemies we should down on board
      indexDirection = -1;
    } else if (team === Team.orangeTeam) indexDirection = 1;
    // orange team is team on bottom
    else throw new Error("Sorry, there are only 2 teams");

    const oppositeEnemyLocation = {
      rowNumber: unitBoardLocation.rowNumber + indexDirection,
      columnNumber: unitBoardLocation.columnNumber,
    };

    const isNextLineWithEnemy: boolean =
      this.getUnitTeam({
        rowNumber: unitBoardLocation.rowNumber + indexDirection,
        columnNumber: unitBoardLocation.columnNumber,
      }) !== team;

    const isLeftEnemy: boolean =
      isNextLineWithEnemy && unitBoardLocation.columnNumber - 1 >= 0;
    const isRightEnemy: boolean =
      isNextLineWithEnemy &&
      unitBoardLocation.columnNumber + 1 <=
        this.gameBoard.getBoardMatrix().length;

    if (isNextLineWithEnemy) {
      if (this.getUnitCondition(oppositeEnemyLocation)) {
        neighborUnitLocation.push(oppositeEnemyLocation);
      }
    }

    const enemyLeftLocation = {
      rowNumber: unitBoardLocation.rowNumber + indexDirection,
      columnNumber: unitBoardLocation.columnNumber - 1,
    };

    const enemyRightLocation = {
      rowNumber: unitBoardLocation.rowNumber + indexDirection,
      columnNumber: unitBoardLocation.columnNumber + 1,
    };

    if (
      isNextLineWithEnemy &&
      isLeftEnemy &&
      this.getUnitCondition(enemyLeftLocation)
    ) {
      neighborUnitLocation.push(enemyLeftLocation);
    }
    if (
      isNextLineWithEnemy &&
      isRightEnemy &&
      this.getUnitCondition(enemyRightLocation)
    ) {
      neighborUnitLocation.push(enemyRightLocation);
    }

    return neighborUnitLocation;
  }

  getEnemyRow(row: number): (boardLocation | null)[] {
    // for checking enemy row with alive units
    return this.gameBoard
      .getBoardMatrix()
      [row].filter((unit) => {
        // @ts-ignore
        unit.hp > 0;
      })
      .map((unit) => {
        if (this.getUnitLocation(unit as Unit)) {
          return this.getUnitLocation(unit as Unit);
        }
        return null;
      });
  }

  switchTeam(team: Team): Team {
    return team === Team.redTeam ? Team.orangeTeam : Team.orangeTeam;
  }

  getNextLineTeam(unitBoardLocation: boardLocation): Team | null {
    const team = this.getUnitTeam(unitBoardLocation);

    let indexDirection = 0;
    if (team === Team.redTeam) {
      indexDirection = -1;
    } else indexDirection = 1;

    if (
      this.getEnemyRow(unitBoardLocation.rowNumber + indexDirection).length ===
      0
    ) {
      //=> there is no any alive units on
      return null;
    }

    return this.getUnitTeam({
      rowNumber: unitBoardLocation.rowNumber + indexDirection,
      columnNumber: unitBoardLocation.columnNumber,
    });
  }

  getNearestEnemyRow(unitBoardLocation: boardLocation): boardLocation[] | null {
    // null if enemies rows are empty
    const team = this.getUnitTeam(unitBoardLocation);
    const gameBoardMatrix = this.gameBoard.getBoardMatrix();
    if (team === Team.orangeTeam) {
      //bottom team, matrix rows start with 0
      for (let i = Math.floor(gameBoardMatrix.length / 2) - 1; i >= 0; i--) {
        if (gameBoardMatrix[i].filter((u) => u).length) {
          return this.getEnemyRow(i).filter(this.deleteUnits);
        }
      }
    } else if (team === Team.redTeam) {
      for (
        let i = Math.floor(gameBoardMatrix.length / 2);
        i <= gameBoardMatrix.length;
        i++
      ) {
        if (gameBoardMatrix[i].filter((u) => u).length) {
          return this.getEnemyRow(i).filter(this.deleteUnits);
        }
      }
    }
    return null;
  }

  getAllTeamUnits(
    //method for units with multitarget behavior, allies is responsible for type of considering team. below there are 2 methods for find all allies and all enemies
    unitBoardLocation: boardLocation,
    allies = false
  ): boardLocation[] {
    const getBoardMatrix = this.gameBoard.getBoardMatrix();
    const unitsTeam = this.getUnitTeam(unitBoardLocation);
    const enemyUnitsLocation = [];
    const consideringTeam = allies ? this.switchTeam(unitsTeam) : unitsTeam;
    if (consideringTeam === Team.orangeTeam) {
      for (let i = Math.floor(getBoardMatrix.length / 2); i >= 0; i--) {
        for (let j = 0; j < getBoardMatrix[i].length; j++)
          if (getBoardMatrix[i][j]) {
            const enemyBoardLocation = this.getUnitLocation(
              getBoardMatrix[i][j] as Unit
            );
            if (enemyBoardLocation) {
              enemyUnitsLocation.push(enemyBoardLocation);
            }
          }
      }
    } else {
      for (
        let i = Math.floor(getBoardMatrix.length / 2);
        i <= getBoardMatrix.length;
        i++
      ) {
        for (let j = 0; j < getBoardMatrix[i].length; j++)
          if (getBoardMatrix[i][j]) {
            const enemyBoardLocation = this.getUnitLocation(
              getBoardMatrix[i][j] as Unit
            );
            if (enemyBoardLocation) {
              enemyUnitsLocation.push(enemyBoardLocation);
            }
          }
      }
    }
    return enemyUnitsLocation;
  }

  getAllAlliesLocation(unitBoardLocation: boardLocation) {
    //method for multi healers
    return this.getAllTeamUnits(unitBoardLocation, true);
  }

  getAllEnemiesLocation(unitBoardLocation: boardLocation) {
    //method for multi attack
    return this.getAllTeamUnits(unitBoardLocation);
  }
}
