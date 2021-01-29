import { Unit } from "../Unit";
import { RangeAttack } from "../actions/attack/RangeAttack";
import { DefencePerformance } from "../actions/defence/DefencePerformance";
import { SingleTarget } from "../targets/SingleTarget";
import { RangeType } from "../range/RangeType";

export class Bandit extends Unit{
    constructor() {
        super('Bandit',75, 30,0, 60, new RangeAttack(), new DefencePerformance(), new RangeType(),new SingleTarget());
    }
}
