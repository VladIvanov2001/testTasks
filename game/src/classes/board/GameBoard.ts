import {unit, boardLocation} from "../../types/types";

export class GameBoard {

    board: Array<Array<unit>>;

    constructor(rowsNumber: number, columnsNumber: number) {
        const columns = Array<unit>(columnsNumber).fill(null);
        this.board = Array<Array<unit>>(rowsNumber).fill(columns);
    }

    getBoard(): unit[][] {
        return this.board;
    }

    putAllUnitsOnBoard(units: unit[][]): void {
        this.board = [...units];
    }

    putUnitOnBoard(unit: unit, boardLocation: boardLocation): void {
        this.board[boardLocation.columnNumber][boardLocation.rowNumber] = unit;
    }
}
