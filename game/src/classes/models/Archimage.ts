import { Unit } from "../Unit";
import { Attacker } from "../actions/attack/Attacker";
import { RangeType } from "../range/RangeType";
import { SingleTarget } from "../targets/SingleTarget";

export class Archimage extends Unit {
  constructor(
    name = "Archimage",
    hp = 90,
    dealValue = 30,
    initiative = 40
  ) {
    super(
      name,
      hp,
      dealValue,
      initiative,
      new Attacker(),
      new RangeType(),
      new SingleTarget()
    );
  }
}
