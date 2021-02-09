import { GameBoard } from './GameBoard';
import { Unit } from "../Unit";
import { BoardLocation, Team, PossibleUnit, PossibleBoardLocation } from '../../types/types';

//this class is a heap methods for action with boards.
export class GameBoardAction {
  private gameBoard: GameBoard;

  constructor(gameBoard: GameBoard) {
    this.gameBoard = gameBoard;
  }

  getUnitBoardLocation(unit: Unit): PossibleBoardLocation {
    let rowNumber = 0;
    let columnNumber = 0;
    let wasFound = false;

    this.gameBoard.getBoardMatrix().every((row) => {
      const index: number = row.findIndex((u) => u === unit);
      if (index === -1) {
        rowNumber += 1;
      } else {
        wasFound = true;
        columnNumber = index;
        return false;
      }
      return true;
    });

    if (wasFound) {
      return {
        rowNumber,
        columnNumber,
      };
    } else {
      return null;
    }
  }

  getUnitByLocation(boardLocation: BoardLocation): PossibleUnit {
    if (boardLocation) {
      return this.gameBoard.getBoardMatrix()[boardLocation.rowNumber][boardLocation.columnNumber];
    }
    return null;
  }

  isAlive(boardLocation: BoardLocation): boolean {
    return Boolean(this.gameBoard.getBoardMatrix()[boardLocation.rowNumber][boardLocation.columnNumber]);
  }

  removeDeadUnits<TValue>(value: TValue | null): value is TValue { //for callback in filter after each move; is - predication that value will be TValue type
    return value !== null;
  }

  getTeamOfUnit(unitBoardLocation: BoardLocation): Team {
    return unitBoardLocation.rowNumber < Math.floor(this.gameBoard.getBoardMatrix().length / 2) //there are odd number of fields
      ? Team.RedTeam
      : Team.OrangeTeam;
  }

  getAdjacentEnemiesLocation(unitBoardLocation: BoardLocation): BoardLocation[] { // this method is responsible for seacrhing targets for melee attackers
    const team = this.getTeamOfUnit(unitBoardLocation);
    const valueChange: number = team === Team.RedTeam ? 1 : -1;

    const adjacentUnitsLocation: BoardLocation[] = [];

    const oppositeEnemyLocation = {
      rowNumber: unitBoardLocation.rowNumber + valueChange,
      columnNumber: unitBoardLocation.columnNumber,
    };

    const hasEnemiesNextLine: boolean =
      this.getTeamOfUnit({
        rowNumber: unitBoardLocation.rowNumber + valueChange,
        columnNumber: unitBoardLocation.columnNumber,
      }) !== team;

    const hasLeftEnemy: boolean = unitBoardLocation.columnNumber - 1 >= 0 && hasEnemiesNextLine;
    const hasRightEnemy: boolean =
      unitBoardLocation.columnNumber + 1 < this.gameBoard.getBoardMatrix().length && hasEnemiesNextLine;

    if (hasEnemiesNextLine) {
      if (this.isAlive(oppositeEnemyLocation)) {
        adjacentUnitsLocation.push(oppositeEnemyLocation);
      }
    }

    const leftEnemyLocation = {
      rowNumber: unitBoardLocation.rowNumber + valueChange,
      columnNumber: unitBoardLocation.columnNumber - 1,
    };
    const rightEnemyLocation = {
      rowNumber: unitBoardLocation.rowNumber + valueChange,
      columnNumber: unitBoardLocation.columnNumber + 1,
    };

    if (hasEnemiesNextLine && hasLeftEnemy && this.isAlive(leftEnemyLocation)) {
      adjacentUnitsLocation.push(leftEnemyLocation);
    }
    if (hasEnemiesNextLine && hasRightEnemy && this.isAlive(rightEnemyLocation)) {
      adjacentUnitsLocation.push(rightEnemyLocation);
    }

    return adjacentUnitsLocation;
  }

  private getRowEnemiesLocation(rowIndex: number): (PossibleBoardLocation)[] {
    return this.gameBoard
      .getBoardMatrix()[rowIndex].filter((u) => u && u.getHP() > 0)
      .map((u) => {
        const unitBoardLocation = this.getUnitBoardLocation(u as Unit);
        if (unitBoardLocation) {
          return unitBoardLocation;
        }
        return null;
      });
  }

  getTeamOfNextLine(unitBoardLocation: BoardLocation): Team | null {
    const team = this.getTeamOfUnit(unitBoardLocation);
    const valueChange: number = team === Team.RedTeam ? 1 : -1;

    if (this.getRowEnemiesLocation(unitBoardLocation.rowNumber + valueChange).length === 0) {
      return null;
    }

    return this.getTeamOfUnit({
      rowNumber: unitBoardLocation.rowNumber + valueChange,
      columnNumber: unitBoardLocation.columnNumber,
    });
  }

  getNearestLineEnemiesLocation(unitBoardLocation: BoardLocation): BoardLocation[] | null {
    const matrix = this.gameBoard.getBoardMatrix();
    const teamOfUnit: Team = this.getTeamOfUnit(unitBoardLocation);
    const rowsHalfIndex = Math.floor(matrix.length / 2);

    if (teamOfUnit === Team.OrangeTeam) {
      for (let i = rowsHalfIndex - 1; i >= 0; i -= 1) {
        if (matrix[i].filter((u) => u).length) {
          // eslint-disable-next-line @typescript-eslint/unbound-method
          return this.getRowEnemiesLocation(i).filter(this.removeDeadUnits);
        }
      }
    } else {
      for (let i = rowsHalfIndex; i < matrix.length; i += 1) {
        if (matrix[i].filter((u) => u).length) {
          // eslint-disable-next-line @typescript-eslint/unbound-method
          return this.getRowEnemiesLocation(i).filter(this.removeDeadUnits);
        }
      }
    }

    return null;
  }

  private switchTeam(team: Team) {
    return team === Team.OrangeTeam ? Team.RedTeam : Team.OrangeTeam;
  }

  private getAllTeamUnits(unitBoardLocation: BoardLocation, allies = false): BoardLocation[] { //general method for enemies and allies on board, all depends on second param(allies)
    const matrix = this.gameBoard.getBoardMatrix();
    const teamOfUnit: Team = this.getTeamOfUnit(unitBoardLocation);
    const consideringTeam = allies ? this.switchTeam(teamOfUnit) : teamOfUnit;
    const rowsHalfIndex = Math.floor(matrix.length / 2);
    const enemiesUnitsLocation = [];

    if (consideringTeam === Team.OrangeTeam) {
      for (let i = rowsHalfIndex - 1; i >= 0; i -= 1) {
        for (let j = 0; j < matrix[i].length; j += 1) {
          if (matrix[i][j]) {
            const enemyBoardLocation = this.getUnitBoardLocation(matrix[i][j] as Unit);
            if (enemyBoardLocation) {
              enemiesUnitsLocation.push(enemyBoardLocation);
            }
          }
        }
      }
    } else {
      for (let i = rowsHalfIndex; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix[i].length; j += 1) {
          if (matrix[i][j]) {
            const enemyBoardLocation = this.getUnitBoardLocation(matrix[i][j] as Unit);
            if (enemyBoardLocation) {
              enemiesUnitsLocation.push(enemyBoardLocation);
            }
          }
        }
      }
    }

    return enemiesUnitsLocation;
  }

  getAllEnemiesLocation(unitBoardLocation: BoardLocation): BoardLocation[] {
    return this.getAllTeamUnits(unitBoardLocation);
  }

  getAllAlliesLocation(unitBoardLocation: BoardLocation): BoardLocation[] {
    return this.getAllTeamUnits(unitBoardLocation, true);
  }
}
