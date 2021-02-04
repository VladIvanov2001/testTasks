import { GameBoard } from "./GameBoard";
import { boardLocation, Team, unit } from "../../types/types";
import { Unit } from "../Unit";

export class ActionWithBoard {
  gameBoard: GameBoard;

  constructor(gameBoard: GameBoard) {
    this.gameBoard = gameBoard;
  }

  getUnitLocation(unit: Unit): boardLocation | null {
    let isFound = false;
    let columnNumber = 0;
    let rowNumber = 0;

    this.gameBoard.getBoard().every((row) => {
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
      return this.gameBoard.getBoard()[boardLocation.rowNumber][
        boardLocation.columnNumber
      ];
    }
    return null;
  }

  getUnitCondition(boardLocation: boardLocation): boolean {
    return Boolean(
      this.gameBoard.getBoard()[boardLocation.rowNumber][
        boardLocation.columnNumber
      ]
    );
  }

  deleteUnits<TUnit>(unit: TUnit | null): unit is TUnit {
    return unit !== null;
  }

  getUnitTeam(unitBoardLocation: boardLocation): Team {
    return unitBoardLocation.rowNumber <
      Math.floor(this.gameBoard.getBoard().length / 2)
      ? Team.redTeam
      : Team.orangeTeam;
  }

  getEnemyNeighborLocation(unitBoardLocation: boardLocation) {
    const neighborUnitLocation: boardLocation[] = [];
    const team = this.getUnitTeam(unitBoardLocation);
    let indexDirection = 0;
    if (team === Team.redTeam) {
      indexDirection = -1;
    } else indexDirection = 1;

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
      unitBoardLocation.columnNumber + 1 <= this.gameBoard.getBoard().length;

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
    return this.gameBoard
      .getBoard()
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

  switchTeam(team: Team) {
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
      return null;
    }

    return this.getUnitTeam({
      rowNumber: unitBoardLocation.rowNumber + indexDirection,
      columnNumber: unitBoardLocation.columnNumber,
    });
  }

  getNearestEnemyRow(unitBoardLocation: boardLocation): boardLocation[] | null {
    const team = this.getUnitTeam(unitBoardLocation);
    const board = this.gameBoard.getBoard();
    if (team === Team.orangeTeam) {
      for (let i = Math.floor(board.length / 2) - 1; i >= 0; i--) {
        if (board[i].filter((u) => u).length) {
          return this.getEnemyRow(i).filter(this.deleteUnits);
        }
      }
    } else {
      for (let i = Math.floor(board.length / 2); i <= board.length; i++) {
        if (board[i].filter((u) => u).length) {
          return this.getEnemyRow(i).filter(this.deleteUnits);
        }
      }
    }
    return null;
  }

  getAllTeamUnits(
    unitBoardLocation: boardLocation,
    enemies = false
  ): boardLocation[] {
    const gameBoard = this.gameBoard.getBoard();
    const unitsTeam = this.getUnitTeam(unitBoardLocation);
    const enemyUnitsLocation = [];
    const consideringTeam = enemies ? this.switchTeam(unitsTeam) : unitsTeam;
    if (consideringTeam === Team.orangeTeam) {
      for (let i = Math.floor(gameBoard.length / 2); i >= 0; i--) {
        for (let j = 0; j < gameBoard[i].length; j++)
          if (gameBoard[i][j]) {
            const enemyBoardLocation = this.getUnitLocation(
              gameBoard[i][j] as Unit
            );
            if (enemyBoardLocation) {
              enemyUnitsLocation.push(enemyBoardLocation);
            }
          }
      }
    } else {
      for (
        let i = Math.floor(gameBoard.length / 2);
        i <= gameBoard.length;
        i++
      ) {
        for (let j = 0; j < gameBoard[i].length; j++)
          if (gameBoard[i][j]) {
            const enemyBoardLocation = this.getUnitLocation(
              gameBoard[i][j] as Unit
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
    return this.getAllTeamUnits(unitBoardLocation, false);
  }

  getAllEnemiesLocation(unitBoardLocation: boardLocation) {
    return this.getAllTeamUnits(unitBoardLocation);
  }
}
