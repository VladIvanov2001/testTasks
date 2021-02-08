import { Unit } from "../Unit";
import { MeleeType } from "../range/MeleeType";
import { SingleTarget } from "../targets/SingleTarget";
import { Attacker } from "../actions/attack/Attacker";

export class Skeleton extends Unit {
  constructor(
    name = "Skeleton",
    hp = 100,
    dealValue = 25,
    initiative = 50
  ) {
    super(
      name,
      hp,
      dealValue,
      initiative,
      new Attacker(),
      new MeleeType(),
      new SingleTarget()
    );
  }
}
