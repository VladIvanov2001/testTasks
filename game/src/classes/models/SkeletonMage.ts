import { Unit } from "../Unit";
import { MageAttack } from "../actions/attack/MageAttack";
import { DefencePerformance } from "../actions/defence/DefencePerformance";
import { RangeType } from "../range/RangeType";
import { MultiTarget } from "../targets/MultiTarget";

export class SkeletonMage extends Unit{
    constructor(hp = 50, damage = 20, heal = 0, initiative = 40) {
        super('Skeleton Mage',50, 20,0, 40, new MageAttack(), new DefencePerformance(), new RangeType(), new MultiTarget());
        this.hp = hp;
        this.damage = damage;
        this.heal = heal;
        this.initiative = initiative;
    }
}
