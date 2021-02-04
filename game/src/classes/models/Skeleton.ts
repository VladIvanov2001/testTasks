import { Unit } from "../Unit";
import { MeleeType } from "../range/MeleeType";
import { SingleTarget } from "../targets/SingleTarget";
import { Attack } from "../actions/attack/Attack";

export class Skeleton extends Unit {
  constructor(
    name = "Skeleton",
    hp = 100,
    damage = 25,
    heal = 0,
    initiative = 50
  ) {
    super(
      name,
      hp,
      damage,
      heal,
      initiative,
      new Attack(),
      new MeleeType(),
      new SingleTarget()
    );
  }
}
