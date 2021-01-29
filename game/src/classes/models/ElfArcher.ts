import { Unit } from "../Unit";
import {RangeAttack} from "../actions/attack/RangeAttack";
import {IDefence} from "../../interfaces/IDefence";
import {DefencePerformance} from "../actions/defence/DefencePerformance";
import {RangeType} from "../range/RangeType";
import {SingleTarget} from "../targets/SingleTarget";

export class ElfArcher extends Unit{
    constructor() {
        super('Elf Archer', 90, 45, 60, 0, new RangeAttack(), new DefencePerformance(), new RangeType(), new SingleTarget());
    }
}
