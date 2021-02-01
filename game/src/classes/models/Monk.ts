import {Unit} from "../Unit";
import {Heal} from "../actions/health/Heal";
import {RangeType} from "../range/RangeType";
import {SingleTarget} from "../targets/SingleTarget";

export class Monk extends Unit {
    constructor(name: string | 'Monk', hp: number | 90, damage: number | 0, heal: number | 40, initiative: number | 20) {
        super(name, hp, damage, heal, initiative, new Heal(), new RangeType(), new SingleTarget());
    }
}
