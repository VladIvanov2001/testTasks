import {Unit} from "../Unit";
import {RangeType} from "../range/RangeType";
import {SingleTarget} from "../targets/SingleTarget";
import {Attack} from "../actions/attack/Attack";

export class ElfArcher extends Unit {
    constructor(name: string | 'Elf Archer', hp: number | 90, damage: number | 45, heal: number | 0, initiative: number | 60) {
        super(name, hp, damage, heal, initiative, new Attack(), new RangeType(), new SingleTarget());
    }
}
