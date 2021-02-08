import { Unit } from "../Unit";
import { Healer } from "../actions/health/Healer";
import { RangeType } from "../range/RangeType";
import { MultiTarget } from "../targets/MultiTarget";

export class Bishop extends Unit {
  constructor(
    name = "Bishop",
    hp = 130,
    dealValue = 25,
    initiative = 20
  ) {
    super(
      name,
      hp,
      dealValue,
      initiative,
      new Healer(),
      new RangeType(),
      new MultiTarget()
    );
  }
}
