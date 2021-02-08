import { Unit } from "../classes/Unit";
import { BoardLocation } from "../types/types";
import { GameBoardAction } from "../classes/board/GameBoardAction";

export interface IRoleAction {
  action(
    unit: Unit,
    unitsBoardLocations: BoardLocation[],
    gameBoardAction: GameBoardAction
  ): Unit[];
}
