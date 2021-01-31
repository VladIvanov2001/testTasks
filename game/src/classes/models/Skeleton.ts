import { Unit } from "../Unit";
import { MeleeAttack } from "../actions/attack/MeleeAttack";
import { DefencePerformance } from "../actions/defence/DefencePerformance";
import { MeleeType } from "../range/MeleeType";
import { SingleTarget } from "../targets/SingleTarget";

export class Skeleton extends Unit {
    constructor(hp = 100, damage = 25, heal = 0, initiative = 50) {
        super('Skeleton', hp, damage,0, initiative, new MeleeAttack(), new DefencePerformance(), new MeleeType(), new SingleTarget());
        this.hp = hp;
        this.damage = damage;
        this.heal = heal;
        this.initiative = initiative;

    }
}
