import { Unit } from "../Unit";
import { SingleTarget } from "../targets/SingleTarget";
import { MeleeType } from "../range/MeleeType";
import { Attacker } from "../actions/attack/Attacker";

export class Centaur extends Unit {
  constructor(
    name = "Centaur",
    hp = 150,
    dealValue = 50,
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
