import { Unit } from "../Unit";
import { MageAttack } from "../actions/attack/MageAttack";
import { DefencePerformance } from "../actions/defence/DefencePerformance";
import { RangeType } from "../range/RangeType";
import { SingleTarget } from "../targets/SingleTarget";

export class Archimage extends Unit{
    constructor(hp = 90, damage = 30, heal = 0, initiative = 40 ) {
        super('Archimage', hp, damage, heal, initiative, new MageAttack(), new DefencePerformance(), new RangeType(), new SingleTarget());
        this.hp = hp;
        this.damage = damage;
        this.heal = heal;
        this.initiative = initiative;
    }
}
