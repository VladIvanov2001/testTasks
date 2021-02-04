import { Unit } from "../Unit";
import { Paralyze } from "../actions/paralyze/Paralyze";
import { SingleTarget } from "../targets/SingleTarget";
import { RangeType } from "../range/RangeType";

export class Sirena extends Unit {
  constructor(
    name = "Sirena",
    hp = 80,
    damage = 0,
    heal = 0,
    initiative = 20
  ) {
    super(
      name,
      hp,
      damage,
      heal,
      initiative,
      new Paralyze(),
      new RangeType(),
      new SingleTarget()
    );
  }
}
