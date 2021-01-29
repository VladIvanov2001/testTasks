import { Unit } from "../Unit";
import { PerformParalyze } from "../actions/paralyze/PerformParalyze";
import { DefencePerformance } from "../actions/defence/DefencePerformance";
import { SingleTarget } from "../targets/SingleTarget";
import { RangeType } from "../range/RangeType";

export class Sirena extends Unit{
    constructor() {
        super('Sirena', 80, 0,0, 20, new PerformParalyze(), new DefencePerformance(), new RangeType(), new SingleTarget());
    }
}
