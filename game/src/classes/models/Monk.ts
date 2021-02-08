import { Unit } from "../Unit";
import { Healer } from "../actions/health/Healer";
import { RangeType } from "../range/RangeType";
import { SingleTarget } from "../targets/SingleTarget";

export class Monk extends Unit {
  constructor(name = "Monk", hp = 90,  dealValue = 40, initiative = 20) {
    super(
      name,
      hp,
      dealValue,
      initiative,
      new Healer(),
      new RangeType(),
      new SingleTarget()
    );
  }
}
