import { Unit } from "../Unit";
import { MeleeType } from "../range/MeleeType";
import { SingleTarget } from "../targets/SingleTarget";
import { Attack } from "../actions/attack/Attack";

export class Skeleton extends Unit {
  constructor(
    name: string | "Skeleton",
    hp: number | 100,
    damage: number | 25,
    heal: number | 0,
    initiative: number | 50
  ) {
    super(
      name,
      hp,
      damage,
      0,
      initiative,
      new Attack(),
      new MeleeType(),
      new SingleTarget()
    );
  }
}
