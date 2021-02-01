import { Unit } from "../Unit";
import { Attack } from "../actions/attack/Attack";
import { RangeType } from "../range/RangeType";
import { MultiTarget } from "../targets/MultiTarget";

export class SkeletonMage extends Unit{
    constructor(name: string | 'Skeleton Mage', hp: number | 50, damage: number | 20, heal: number | 0, initiative: number | 40) {
        super('Skeleton Mage',hp, damage,heal, initiative, new Attack(), new RangeType(), new MultiTarget());
    }
}
