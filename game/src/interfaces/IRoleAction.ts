import { GameBoard } from "../classes/board/GameBoard";
import { Unit } from "../classes/Unit";
import { boardLocation } from "../types/types";
import { GameBoardAction } from "../classes/board/GameBoardAction";

export interface IRoleAction {
  action(
    unit: Unit,
    unitsBoardLocations: boardLocation[],
    actionWithBoard: GameBoardAction
  ): Unit[];
}
