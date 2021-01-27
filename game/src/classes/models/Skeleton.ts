import {Unit} from "../Unit";
import {MeleeAttack} from "../actions/attack/MeleeAttack";
import {DefencePerformance} from "../actions/defence/DefencePerformance";

export class Skeleton extends Unit {
    constructor(type: string, hp: number, damage: number, initiative: number) {
        super(type, hp, damage, initiative, new MeleeAttack(), new DefencePerformance());
    }
}
