import { Unit } from "../Unit";
import {SingleTargetHeal} from "../actions/health/SIngleTargetHeal";

export class Monk extends Unit{
    constructor(type: string, hp: number, damage: number, initiative: number) {
        super(type, hp, damage, initiative, new SingleTargetHeal());
    }
}
