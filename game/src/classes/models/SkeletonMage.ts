import { Unit } from "../Unit";
import { Attacker } from "../actions/attack/Attacker";
import { RangeType } from "../range/RangeType";
import { MultiTarget } from "../targets/MultiTarget";

export class SkeletonMage extends Unit {
  constructor(
    name = "Skeleton Mage",
    hp = 50,
    dealValue = 20,
    initiative = 40
  ) {
    super(
      name,
      hp,
      dealValue,
      initiative,
      new Attacker(),
      new RangeType(),
      new MultiTarget()
    );
  }
}
