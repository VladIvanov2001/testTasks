import { Unit } from "../Unit";
import { SingleTarget } from "../targets/SingleTarget";
import { RangeType } from "../range/RangeType";
import { Attacker } from "../actions/attack/Attacker";

export class Bandit extends Unit {
  constructor(
    name = "Bandit",
    hp = 75,
    dealValue = 30,
    initiative = 60
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
