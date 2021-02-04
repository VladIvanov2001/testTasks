import { Unit } from "../Unit";
import { Attack } from "../actions/attack/Attack";
import { RangeType } from "../range/RangeType";
import { SingleTarget } from "../targets/SingleTarget";

export class Archimage extends Unit {
  constructor(
    name = "Archimage",
    hp = 90,
    damage = 30,
    heal = 0,
    initiative = 40
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
