import { GameBoard } from './GameBoard';
import { Unit } from "../Unit";
import { boardLocation, Team, unit } from "../../types/types";

export class GameBoardAction {
  private gameBoard: GameBoard;

  constructor(board: GameBoard) {
    this.gameBoard = board;
  }

  getUnitBoardLocation(unit: Unit): boardLocation | null {
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

  getUnitByLocation(boardLocation: boardLocation): unit {
    if (boardLocation) {
      return this.gameBoard.getBoardMatrix()[boardLocation.rowNumber][boardLocation.columnNumber];
    }
    return null;
  }

  isAlive(boardLocation: boardLocation): boolean {
    return Boolean(this.gameBoard.getBoardMatrix()[boardLocation.rowNumber][boardLocation.columnNumber]);
  }

  private removeDeadUnits<TValue>(value: TValue | null | undefined): value is TValue {
    return value !== null && value !== undefined;
  }

  getTeamOfUnit(unitBoardLocation: boardLocation): Team {
    return unitBoardLocation.rowNumber < Math.floor(this.gameBoard.getBoardMatrix().length / 2)
      ? Team.RedTeam
      : Team.OrangeTeam;
  }

  getAdjacentEnemiesLocation(unitBoardLocation: boardLocation): boardLocation[] {
    const team = this.getTeamOfUnit(unitBoardLocation);
    const valueChange: number = team === Team.RedTeam ? 1 : -1;

    const adjacentUnitsLocation: boardLocation[] = [];

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

  private getRowEnemiesLocation(rowIndex: number): (boardLocation | null)[] {
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

  getTeamOfNextLine(unitBoardLocation: boardLocation): Team | null {
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

  getNearestLineEnemiesLocation(unitBoardLocation: boardLocation): boardLocation[] | null {
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

  private getAllTeamUnits(unitBoardLocation: boardLocation, allies = false): boardLocation[] {
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

  getAllEnemiesLocation(unitBoardLocation: boardLocation): boardLocation[] {
    return this.getAllTeamUnits(unitBoardLocation);
  }

  getAllAlliesLocation(unitBoardLocation: boardLocation): boardLocation[] {
    return this.getAllTeamUnits(unitBoardLocation, true);
  }
}
