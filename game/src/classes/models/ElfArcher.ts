import { Unit } from "../Unit";
import { RangeType } from "../range/RangeType";
import { SingleTarget } from "../targets/SingleTarget";
import { Attack } from "../actions/attack/Attack";

export class ElfArcher extends Unit {
  constructor(
    name = "Elf Archer",
    hp = 90,
    damage = 45,
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
