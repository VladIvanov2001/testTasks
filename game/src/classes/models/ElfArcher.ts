import {Unit} from "../Unit";
import {RangeAttack} from "../actions/attack/RangeAttack";
import {IDefence} from "../../interfaces/IDefence";
import {DefencePerformance} from "../actions/defence/DefencePerformance";
import {RangeType} from "../range/RangeType";
import {SingleTarget} from "../targets/SingleTarget";

export class ElfArcher extends Unit {
    constructor(name: string | 'Elf Archer', hp: number | 90, damage: number | 45, heal: number | 0, initiative: number | 60) {
        super(name, hp, damage, heal, initiative, new RangeAttack(), new DefencePerformance(), new RangeType(), new SingleTarget());
    }
}
