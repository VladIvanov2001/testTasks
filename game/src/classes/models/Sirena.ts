import {Unit} from "../Unit";
import {PerformParalyze} from "../actions/paralyze/PerformParalyze";
import {DefencePerformance} from "../actions/defence/DefencePerformance";
import {SingleTarget} from "../targets/SingleTarget";
import {RangeType} from "../range/RangeType";

export class Sirena extends Unit {

    constructor(hp = 80, damage = 0, heal = 0, initiative = 20) {
        super('Sirena', hp, damage, heal, initiative, new PerformParalyze(), new DefencePerformance(), new RangeType(), new SingleTarget());
        this.hp = hp;
        this.damage = damage;
        this.heal = heal;
        this.initiative = initiative;
    }
}
