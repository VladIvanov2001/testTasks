import { Unit } from "../Unit";
import { SingleTarget } from "../targets/SingleTarget";
import { RangeType } from "../range/RangeType";
import { Attack } from "../actions/attack/Attack";

export class Bandit extends Unit {
  constructor(
    name = "Bandit",
    hp = 75,
    damage = 30,
    heal = 0,
    initiative = 60
  ) {
    super(
      name,
      hp,
      damage,
      heal,
      initiative,
      new Attack(),
      new RangeType(),
      new SingleTarget()
    );
  }
}
