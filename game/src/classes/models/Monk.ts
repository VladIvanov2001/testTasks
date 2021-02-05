import { Unit } from "../Unit";
import { Heal } from "../actions/health/Heal";
import { RangeType } from "../range/RangeType";
import { SingleTarget } from "../targets/SingleTarget";

export class Monk extends Unit {
  constructor(name = "Monk", hp = 90, damage = 0, heal = 40, initiative = 20) {
    super(
      name,
      hp,
      damage,
      heal,
      initiative,
      new Heal(),
      new RangeType(),
      new SingleTarget()
    );
  }
}
