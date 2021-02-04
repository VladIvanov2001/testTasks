import { Unit } from "../Unit";
import { Heal } from "../actions/health/Heal";
import { RangeType } from "../range/RangeType";
import { MultiTarget } from "../targets/MultiTarget";

export class Bishop extends Unit {
  constructor(
    name: string | "Bishop",
    hp: number | 130,
    damage: number | 0,
    heal: number | 25,
    initiative: number | 20
  ) {
    super(
      name,
      hp,
      damage,
      heal,
      initiative,
      new Heal(),
      new RangeType(),
      new MultiTarget()
    );
  }
}
