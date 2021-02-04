import { boardLocation, Team, TypeOfAction, unit } from "./types/types";
import { Unit } from "./classes/Unit";
import { Queue } from "./classes/Queue";
import { ActionWithBoard } from "./classes/board/ActionWithBoard";
import { InitBoard } from "./classes/InitBoard";
import { GameBoard } from "./classes/board/GameBoard";
import { UnitAction } from "./classes/board/UnitAction";

type initialGameData = {
  units: unit[][];
  switchQueue: Queue;
  unitAction: UnitAction;
};

export class Game {
  static actionWithBoard: ActionWithBoard;
  static switchQueue: Queue;

  static start(rowsNumber: number, columnsNumber: number): initialGameData {
    const randomizer = new InitBoard();
    const gameBoard = new GameBoard(rowsNumber, columnsNumber);
    gameBoard.putAllUnitsOnBoard(
      randomizer.generateGameBoard(rowsNumber, columnsNumber)
    );
    this.actionWithBoard = new ActionWithBoard(gameBoard);
    const units = gameBoard.getBoard();
    this.switchQueue = new Queue(units, randomizer);
    const unitAction = new UnitAction(
      this.actionWithBoard,
      gameBoard,
      this.switchQueue
    );

    return {
      units,
      switchQueue: this.switchQueue,
      unitAction,
    };
  }

  static finish(currentUnit: Unit): { isFinished: boolean; currentTeam: Team } {
    return {
      isFinished: !this.actionWithBoard
        .getAllEnemiesLocation(
          this.actionWithBoard.getUnitLocation(currentUnit) as boardLocation
        )
        .some((enemyLocation) =>
          this.actionWithBoard.getUnitCondition(enemyLocation)
        ),
      currentTeam: this.actionWithBoard.getUnitTeam(
        this.actionWithBoard.getUnitLocation(currentUnit) as boardLocation
      ),
    };
  }
}
