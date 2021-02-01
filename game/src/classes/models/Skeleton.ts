import { Unit } from "../Unit";
import { MeleeAttack } from "../actions/attack/MeleeAttack";
import { DefencePerformance } from "../actions/defence/DefencePerformance";
import { MeleeType } from "../range/MeleeType";
import { SingleTarget } from "../targets/SingleTarget";

export class Skeleton extends Unit {
    constructor(name: string | 'Skeleton', hp: number | 100, damage: number | 25, heal: number | 0, initiative: number | 50) {
        super(name, hp, damage,0, initiative, new MeleeAttack(), new DefencePerformance(), new MeleeType(), new SingleTarget());
    }
}
