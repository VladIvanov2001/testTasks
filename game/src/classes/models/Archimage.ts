import { Unit } from "../Unit";
import { MageAttack } from "../actions/attack/MageAttack";
import { DefencePerformance } from "../actions/defence/DefencePerformance";
import { RangeType } from "../range/RangeType";
import { SingleTarget } from "../targets/SingleTarget";

export class Archimage extends Unit{
    constructor() {
        super('Archimage',90,30,0, 40, new MageAttack(), new DefencePerformance(), new RangeType(), new SingleTarget());
    }
}
