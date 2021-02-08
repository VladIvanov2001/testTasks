import { boardLocation, Team, TypeOfAction, unit } from "./types/types";
import { Unit } from "./classes/Unit";
import { Queue } from "./classes/TurnGenerator";
import { GameBoardAction } from "./classes/board/GameBoardAction";
import { Randomizer } from "./classes/Randomizer";
import { GameBoard } from "./classes/board/GameBoard";
import { UnitAction } from "./classes/board/UnitAction";

type initialGameData = {
  units: unit[][];
  queueSwitcher: Queue;
  unitAction: UnitAction;
};

export class Game {
  static gameBoardAction: GameBoardAction;
  static queueSwitcher: Queue;

  static start(rowsCount: number, columnsCount: number): initialGameData {
    const randomizer = new Randomizer();
    const gameBoard = new GameBoard(rowsCount, columnsCount);
    gameBoard.fillWithUnits(randomizer.generateGameBoard(rowsCount, columnsCount));
    this.gameBoardAction = new GameBoardAction(gameBoard);
    const units = gameBoard.getBoardMatrix();
    this.queueSwitcher = new Queue(units, randomizer);
    const unitAction = new UnitAction(this.gameBoardAction, gameBoard, this.queueSwitcher);

    return {
      units,
      queueSwitcher: this.queueSwitcher,
      unitAction,
    };
  }

  static finish(currentUnit: Unit): { isFinished: boolean; currentTeam: Team } {
    return {
      isFinished: !this.gameBoardAction
        .getAllEnemiesLocation(this.gameBoardAction.getUnitBoardLocation(currentUnit) as boardLocation)
        .some((enemyLocation) => this.gameBoardAction.isAlive(enemyLocation)),
      currentTeam: this.gameBoardAction.getTeamOfUnit(this.gameBoardAction.getUnitBoardLocation(currentUnit) as boardLocation),
    };
  }
}
