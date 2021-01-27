import { Unit } from "../Unit";
import {RangeAttack} from "../actions/attack/RangeAttack";
import {IDefence} from "../../interfaces/IDefence";
import {DefencePerformance} from "../actions/defence/DefencePerformance";

export class Bandit extends Unit{
    constructor(type: string, hp: number, damage: number, initiative: number) {
        super(type, hp, damage, initiative, new RangeAttack(), new DefencePerformance());
    }
}
