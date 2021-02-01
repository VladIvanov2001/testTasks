import {Unit} from "../Unit";
import {MeleeAttack} from "../actions/attack/MeleeAttack";
import {DefencePerformance} from "../actions/defence/DefencePerformance";
import {SingleTarget} from "../targets/SingleTarget";
import {MeleeType} from "../range/MeleeType";

export class Centaur extends Unit{
    constructor(name: string | 'Centaur', hp: number | 150, damage: number | 50, heal: number | 0, initiative: number | 50) {
        super(name, hp, damage,heal, initiative, new MeleeAttack(), new DefencePerformance(), new MeleeType(), new SingleTarget());
    }
}
