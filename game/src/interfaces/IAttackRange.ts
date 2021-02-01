import { boardLocation } from "../types/types";
import {ActionWithBoard} from "../classes/board/ActionWithBoard";

export interface IAttackRange {
    rangeAttack(unitBoardLocation: boardLocation, actionWithBoard: ActionWithBoard): boardLocation[];
}
