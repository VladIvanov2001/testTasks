import { Unit } from "../Unit";
import { SingleTarget } from "../targets/SingleTarget";
import { MeleeType } from "../range/MeleeType";
import { Attack } from "../actions/attack/Attack";

export class Centaur extends Unit {
  constructor(
    name: string | "Centaur",
    hp: number | 150,
    damage: number | 50,
    heal: number | 0,
    initiative: number | 50
  ) {
    super(
      name,
      hp,
      damage,
      heal,
      initiative,
      new Attack(),
      new MeleeType(),
      new SingleTarget()
    );
  }
}
