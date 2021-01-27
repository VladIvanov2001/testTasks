import { Unit } from "../Unit";
import { MultipleHeal } from "../actions/health/MultipleHeal";

export class Bishop extends Unit{
    constructor(type: string, hp: number, damage: number, initiative: number) {
       super(type, hp, damage, initiative, new MultipleHeal());
    }
}
