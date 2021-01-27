import {Unit} from "../Unit";
import {MeleeAttack} from "../actions/attack/MeleeAttack";

export class Centaur extends Unit {
    constructor(type: string, hp: number, damage: number, initiative: number) {
        super(type, hp, damage, initiative, new MeleeAttack);
    }
}
