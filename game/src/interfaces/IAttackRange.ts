import { Board } from "../classes/Board";

export interface IAttackRange{
    rangeAttack(boardLocation:Board): Board[];
}
