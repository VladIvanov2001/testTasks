import {Unit} from "../Unit";
import {MeleeAttack} from "../actions/attack/MeleeAttack";
import {IDefence} from "../../interfaces/IDefence";
import {DefencePerformance} from "../actions/defence/DefencePerformance";

export class Centaur extends Unit{
    constructor(type: string, hp: number, damage: number, initiative: number) {
        super(type, hp, damage, initiative, new MeleeAttack(), new DefencePerformance());
    }
}
