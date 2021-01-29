import {IAttackRange} from "../../interfaces/IAttackRange";

export class RangeType implements IAttackRange{
    rangeAttack():any{
        console.log('range attack');
    }
}
