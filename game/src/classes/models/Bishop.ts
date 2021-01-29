import { Unit } from "../Unit";
import { Heal } from "../actions/health/Heal";
import { DefencePerformance } from "../actions/defence/DefencePerformance";
import { RangeType } from "../range/RangeType";
import { MultiTarget } from "../targets/MultiTarget";

export class Bishop extends Unit{
    constructor() {
       super('Bishop', 130, 0, 25,20, new Heal(), new DefencePerformance(), new RangeType(), new MultiTarget());
    }
}
