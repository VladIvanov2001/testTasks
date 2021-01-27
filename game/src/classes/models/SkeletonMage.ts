import { Unit } from "../Unit";
import { MageAttack } from "../actions/attack/MageAttack";
import {DefencePerformance} from "../actions/defence/DefencePerformance";

export class SkeletonMage extends Unit{
    constructor(type: string, hp: number, damage: number, initiative: number) {
        super(type, hp, damage, initiative, new MageAttack(), new DefencePerformance());
    }
}
