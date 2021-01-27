import { Unit } from "../Unit";
import { MultipleHeal } from "../actions/health/MultipleHeal";
import {IDefence} from "../../interfaces/IDefence";

export class Bishop extends Unit implements IDefence{
    constructor(type: string, hp: number, damage: number, initiative: number) {
       super(type, hp, damage, initiative, new MultipleHeal());
    }
    defence(): any {
        console.log('defence');
    }
}
