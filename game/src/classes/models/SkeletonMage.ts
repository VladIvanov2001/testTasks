import { Unit } from "../Unit";
import { MageAttack } from "../actions/attack/MageAttack";
import { DefencePerformance } from "../actions/defence/DefencePerformance";
import { RangeType } from "../range/RangeType";
import { MultiTarget } from "../targets/MultiTarget";

export class SkeletonMage extends Unit{
    constructor(name: string | 'Skeleton Mage', hp: number | 50, damage: number | 20, heal: number | 0, initiative: number | 40) {
        super('Skeleton Mage',hp, damage,heal, initiative, new MageAttack(), new DefencePerformance(), new RangeType(), new MultiTarget());
    }
}
