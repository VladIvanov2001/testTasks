import { PossibleUnit, BoardLocation, UnitMatrix } from '../../types/types';

export class GameBoard {
  private boardMatrix: UnitMatrix;

  constructor(rowsCount: number, columnsCount: number) {
    const columns = Array<PossibleUnit>(columnsCount).fill(null);
    this.boardMatrix = Array<Array<PossibleUnit>>(rowsCount).fill(columns);
  }

  getBoardMatrix(): PossibleUnit[][] {
    return this.boardMatrix;
  }

  setUnit(boardLocation: BoardLocation, unit: PossibleUnit): void {
    this.boardMatrix[boardLocation.rowNumber][boardLocation.columnNumber] = unit;
  }

  fillWithUnits(unitsMatrix: PossibleUnit[][]): void {
    this.boardMatrix = [...unitsMatrix];
  }
}
