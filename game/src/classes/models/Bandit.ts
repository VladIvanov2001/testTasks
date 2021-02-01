import {Unit} from "../Unit";
import {RangeAttack} from "../actions/attack/RangeAttack";
import {DefencePerformance} from "../actions/defence/DefencePerformance";
import {SingleTarget} from "../targets/SingleTarget";
import {RangeType} from "../range/RangeType";

export class Bandit extends Unit {
    constructor(name: string | 'Bandit', hp: number | 75, damage: number | 30, heal: number | 0, initiative: number | 60) {
        super(name, hp, damage, heal, initiative, new RangeAttack(), new DefencePerformance(), new RangeType(), new SingleTarget());
    }
}
