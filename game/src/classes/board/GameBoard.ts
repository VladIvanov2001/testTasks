import { unit, boardLocation } from "../../types/types";

export class GameBoard {
  private boardMatrix: Array<Array<unit>>;

  constructor(rowsCount: number, columnsCount: number) {
    const columns = Array<unit>(columnsCount).fill(null);
    this.boardMatrix = Array<Array<unit>>(rowsCount).fill(columns);
  }

  getBoardMatrix(): unit[][] {
    return this.boardMatrix;
  }

  setUnit(boardLocation: boardLocation, unit: unit): void {
    this.boardMatrix[boardLocation.rowNumber][boardLocation.columnNumber] = unit;
  }

  fillWithUnits(unitsMatrix: unit[][]): void {
    this.boardMatrix = [...unitsMatrix];
  }
}
