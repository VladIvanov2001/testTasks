import {Unit} from "../Unit";
import {MageAttack} from "../actions/attack/MageAttack";
import {DefencePerformance} from "../actions/defence/DefencePerformance";
import {RangeType} from "../range/RangeType";
import {SingleTarget} from "../targets/SingleTarget";

export class Archimage extends Unit {
    constructor(name: string | 'Archimage', hp: number | 90, damage: number | 30, heal: number | 0, initiative: number | 40) {
        super('Archimage', hp, damage, heal, initiative, new MageAttack(), new DefencePerformance(), new RangeType(), new SingleTarget());
    }
}
