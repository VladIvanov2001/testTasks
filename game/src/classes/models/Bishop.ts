import {Unit} from "../Unit";
import {Heal} from "../actions/health/Heal";
import {DefencePerformance} from "../actions/defence/DefencePerformance";
import {RangeType} from "../range/RangeType";
import {MultiTarget} from "../targets/MultiTarget";

export class Bishop extends Unit {
    constructor(hp = 130, damage = 0, heal = 25, initiative = 20) {
        super('Bishop', hp, damage, heal, initiative, new Heal(), new DefencePerformance(), new RangeType(), new MultiTarget());
        this.hp = hp;
        this.damage = damage;
        this.heal = heal;
        this.initiative = initiative;
    }
}
