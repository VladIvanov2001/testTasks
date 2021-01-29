import {IAttackRange} from "../../interfaces/IAttackRange";

export class MeleeType implements IAttackRange{
    rangeAttack():any{
        console.log('melee attack');
    }
}
