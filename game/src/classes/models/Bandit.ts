import { Unit } from "../Unit";
import { RangeAttack } from "../actions/attack/RangeAttack";
import { DefencePerformance } from "../actions/defence/DefencePerformance";
import { SingleTarget } from "../targets/SingleTarget";
import { RangeType } from "../range/RangeType";

export class Bandit extends Unit{
    constructor(hp = 75, damage = 30, heal = 0, initiative = 60) {
        super('Bandit',hp, damage,heal, initiative, new RangeAttack(), new DefencePerformance(), new RangeType(),new SingleTarget());
        this.hp = hp;
        this.damage = damage;
        this.heal = heal;
        this.initiative = initiative;
    }
}
