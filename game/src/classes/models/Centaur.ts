import {Unit} from "../Unit";
import {MeleeAttack} from "../actions/attack/MeleeAttack";
import {DefencePerformance} from "../actions/defence/DefencePerformance";
import {SingleTarget} from "../targets/SingleTarget";
import {MeleeType} from "../range/MeleeType";

export class Centaur extends Unit{
    constructor() {
        super('Centaur', 150, 50,0, 50, new MeleeAttack(), new DefencePerformance(), new MeleeType(), new SingleTarget());
    }
}
