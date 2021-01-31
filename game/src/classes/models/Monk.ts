import {Unit} from "../Unit";
import {Heal} from "../actions/health/Heal";
import {DefencePerformance} from "../actions/defence/DefencePerformance";
import {RangeType} from "../range/RangeType";
import {SingleTarget} from "../targets/SingleTarget";

export class Monk extends Unit {
    constructor(hp = 90, damage = 0, heal = 40, initiative = 20) {
        super('Monk', 90, 0, 40, 20, new Heal(), new DefencePerformance(), new RangeType(), new SingleTarget());
        this.hp = hp;
        this.damage = damage;
        this.heal = heal;
        this.initiative = initiative;
    }
}
