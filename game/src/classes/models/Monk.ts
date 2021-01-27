import { Unit } from "../Unit";
import {SingleTargetHeal} from "../actions/health/SIngleTargetHeal";
import {DefencePerformance} from "../actions/defence/DefencePerformance";

export class Monk extends Unit{
    constructor(type: string, hp: number, damage: number, initiative: number) {
        super(type, hp, damage, initiative, new SingleTargetHeal(), new DefencePerformance());
    }
}
