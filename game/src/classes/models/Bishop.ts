import { Unit } from "../Unit";
import { MultipleHeal } from "../actions/health/MultipleHeal";
import {IDefence} from "../../interfaces/IDefence";
import {DefencePerformance} from "../actions/defence/DefencePerformance";

export class Bishop extends Unit{
    constructor(type: string, hp: number, damage: number, initiative: number) {
       super(type, hp, damage, initiative, new MultipleHeal(), new DefencePerformance());
    }
}
