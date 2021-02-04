import { Unit } from "../Unit";
import { SingleTarget } from "../targets/SingleTarget";
import { MeleeType } from "../range/MeleeType";
import { Attack } from "../actions/attack/Attack";

export class Centaur extends Unit {
  constructor(
    name =  "Centaur",
    hp = 150,
    damage=  50,
    heal = 0,
    initiative = 50
  ) {
    super(name, hp, damage, heal, initiative, new Attack(), new MeleeType(), new SingleTarget()
    );
  }
}
