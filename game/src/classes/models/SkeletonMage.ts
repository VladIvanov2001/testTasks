import { Unit } from "../Unit";
import { Attack } from "../actions/attack/Attack";
import { RangeType } from "../range/RangeType";
import { MultiTarget } from "../targets/MultiTarget";

export class SkeletonMage extends Unit {
  constructor(
    name = "Skeleton Mage",
    hp = 50,
    damage = 20,
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
      new MultiTarget()
    );
  }
}
