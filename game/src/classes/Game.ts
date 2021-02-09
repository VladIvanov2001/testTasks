import { BoardLocation, Team, TypeOfAction, PossibleUnit } from "../types/types";
import { Unit } from "./Unit";
import { Queue } from "./Queue";
import { GameBoardAction } from "./board/GameBoardAction";
import { Randomizer } from "./Randomizer";
import { GameBoard } from "./board/GameBoard";
import { UnitAction } from "./board/UnitAction";

type initialGameData = {
  units: PossibleUnit[][];
  queueSwitcher: Queue;
  unitAction: UnitAction;
};
//this class is responsible for init game and start new game after end of previous
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
        .getAllEnemiesLocation(this.gameBoardAction.getUnitBoardLocation(currentUnit) as BoardLocation)
        .some((enemyLocation) => this.gameBoardAction.isAlive(enemyLocation)),
      currentTeam: this.gameBoardAction.getTeamOfUnit(this.gameBoardAction.getUnitBoardLocation(currentUnit) as BoardLocation),
    };
  }
}
