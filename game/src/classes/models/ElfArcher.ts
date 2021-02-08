import { Unit } from "../Unit";
import { RangeType } from "../range/RangeType";
import { SingleTarget } from "../targets/SingleTarget";
import { Attacker } from "../actions/attack/Attacker";

export class ElfArcher extends Unit {
  constructor(
    name = "Elf Archer",
    hp = 90,
    dealValue = 45,
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
