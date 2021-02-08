import { Unit } from "../Unit";
import { Paralyze } from "../actions/paralyze/Paralyze";
import { SingleTarget } from "../targets/SingleTarget";
import { RangeType } from "../range/RangeType";

export class Sirena extends Unit {
  constructor(name = "Siren", hp = 80, dealValue = 0, initiative = 20) {
    super(
      name,
      hp,
      dealValue,
      initiative,
      new Paralyze(),
      new RangeType(),
      new SingleTarget()
    );
  }
}
