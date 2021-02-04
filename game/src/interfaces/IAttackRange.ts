import { boardLocation } from "../types/types";
import { GameBoardAction } from "../classes/board/GameBoardAction";

export interface IAttackRange {
  rangeAttack(
    unitBoardLocation: boardLocation,
    actionWithBoard: GameBoardAction
  ): boardLocation[];
}
