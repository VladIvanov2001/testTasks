import { Unit } from "../Unit";
import {RangeAttack} from "../actions/attack/RangeAttack";

export class ElfArcher extends Unit {
    constructor(type: string, hp: number, damage: number, initiative: number) {
        super(type, hp, damage, initiative, new RangeAttack());
    }
}
