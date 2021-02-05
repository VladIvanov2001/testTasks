import { Unit } from "../Unit";
import { Heal } from "../actions/health/Heal";
import { RangeType } from "../range/RangeType";
import { MultiTarget } from "../targets/MultiTarget";

export class Bishop extends Unit {
  constructor(
    name = "Bishop",
    hp = 130,
    damage = 0,
    heal = 25,
    initiative = 20
  ) {
    super(
      name,
      hp,
      damage,
      heal,
      initiative,
      new Heal(),
      new RangeType(),
      new MultiTarget()
    );
  }
}
