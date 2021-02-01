import {Unit} from "../Unit";
import {SingleTarget} from "../targets/SingleTarget";
import {RangeType} from "../range/RangeType";
import {Attack} from "../actions/attack/Attack";

export class Bandit extends Unit {
    constructor(name: string | 'Bandit', hp: number | 75, damage: number | 30, heal: number | 0, initiative: number | 60) {
        super(name, hp, damage, heal, initiative, new Attack(), new RangeType(), new SingleTarget());
    }
}
