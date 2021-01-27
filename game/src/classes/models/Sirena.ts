import { Unit } from "../Unit";
import {PerformParalyze} from "../actions/paralyze/PerformParalyze";

export class Sirena extends Unit{
    constructor(type: string, hp: number, damage: number, initiative: number) {
        super(type, hp, damage, initiative, new PerformParalyze());
    }
}
