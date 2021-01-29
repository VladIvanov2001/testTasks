import { Unit } from "../Unit";
import { MeleeAttack } from "../actions/attack/MeleeAttack";
import { DefencePerformance } from "../actions/defence/DefencePerformance";
import { MeleeType } from "../range/MeleeType";
import { SingleTarget } from "../targets/SingleTarget";

export class Skeleton extends Unit {
    constructor() {
        super('Skeleton', 100, 25,0, 50, new MeleeAttack(), new DefencePerformance(), new MeleeType(), new SingleTarget());
    }
}
