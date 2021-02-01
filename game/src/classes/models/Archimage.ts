import {Unit} from "../Unit";
import {Attack} from "../actions/attack/Attack";
import {RangeType} from "../range/RangeType";
import {SingleTarget} from "../targets/SingleTarget";

export class Archimage extends Unit {
    constructor(name: string | 'Archimage', hp: number | 90, damage: number | 30, heal: number | 0, initiative: number | 40) {
        super('Archimage', hp, damage, heal, initiative, new Attack(), new RangeType(), new SingleTarget());
    }
}
