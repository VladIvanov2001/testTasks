import { GameBoard } from "../classes/board/GameBoard";
import { Unit } from "../classes/Unit";
import { boardLocation } from "../types/types";
import { ActionWithBoard } from "../classes/board/ActionWithBoard";

export interface IRoleAction {
  action(
    unit: Unit,
    unitsBoardLocations: boardLocation[],
    actionWithBoard: ActionWithBoard
  ): Unit[];
}
