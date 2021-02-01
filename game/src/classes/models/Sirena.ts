import {Unit} from "../Unit";
import {PerformParalyze} from "../actions/paralyze/PerformParalyze";
import {DefencePerformance} from "../actions/defence/DefencePerformance";
import {SingleTarget} from "../targets/SingleTarget";
import {RangeType} from "../range/RangeType";

export class Sirena extends Unit {

    constructor(name: string | 'Sirena', hp: number | 80, damage: number | 0, heal: number | 0, initiative: number | 20) {
        super(name, hp, damage, heal, initiative, new PerformParalyze(), new DefencePerformance(), new RangeType(), new SingleTarget());
    }
}
