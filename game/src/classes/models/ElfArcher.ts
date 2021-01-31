import {Unit} from "../Unit";
import {RangeAttack} from "../actions/attack/RangeAttack";
import {IDefence} from "../../interfaces/IDefence";
import {DefencePerformance} from "../actions/defence/DefencePerformance";
import {RangeType} from "../range/RangeType";
import {SingleTarget} from "../targets/SingleTarget";

export class ElfArcher extends Unit {
    constructor(hp = 90, damage = 45, heal = 0, initiative = 60) {
        super('Elf Archer', hp, damage, 0, 60, new RangeAttack(), new DefencePerformance(), new RangeType(), new SingleTarget());
        this.hp = hp;
        this.damage = damage;
        this.heal = heal;
        this.initiative = initiative;
    }
}
