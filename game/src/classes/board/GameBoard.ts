import { unit, boardLocation, unitMatrix } from "../../types/types";

export class GameBoard {
  private boardMatrix: unitMatrix;

  constructor(rowsNumber: number, columnsNumber: number) {
    const columns = Array<unit>(columnsNumber).fill(null);
    this.boardMatrix = Array<Array<unit>>(rowsNumber).fill(columns);
  }

  getBoardMatrix(): unit[][] {
    //return board with units and their coords
    return this.boardMatrix;
  }

  putAllUnitsOnBoard(units: unit[][]): void {
    this.boardMatrix = [...units];
  }

  putUnitOnBoard(unit: unit, boardLocation: boardLocation): void {
    this.boardMatrix[boardLocation.columnNumber][
      boardLocation.rowNumber
    ] = unit;
  }
}
