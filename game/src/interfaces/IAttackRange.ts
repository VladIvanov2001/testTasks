import { BoardLocation } from "../types/types";
import { GameBoardAction } from "../classes/board/GameBoardAction";

export interface IAttackRange {
  rangeAttack(
    unitBoardLocation: BoardLocation,
    gameBoardAction: GameBoardAction
  ): BoardLocation[];
}
