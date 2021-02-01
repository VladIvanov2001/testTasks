import { boardLocation } from "../types/types";

export interface IAttackRange {
    rangeAttack(unitLocation: boardLocation[], targetLocation: boardLocation): boardLocation[];
}
