import {IRoleAction} from "../interfaces/IRoleAction";
import {IDefence} from "../interfaces/IDefence";
import {IAttackRange} from "../interfaces/IAttackRange";
import {ICountTarget} from "../interfaces/ICountTarget";
import {MeleeType} from "./range/MeleeType";
import {MeleeAttack} from "./actions/attack/MeleeAttack";
import {DefencePerformance} from "./actions/defence/DefencePerformance";
import {SingleTarget} from "./targets/SingleTarget";

export class Unit {
    name: string;
    hp: number;
    damage: number;
    heal: number;
    initiative: number;
    roleAction: IRoleAction;
    rangeType: IAttackRange;
    defence: IDefence;
    targetBehavior: ICountTarget;

    constructor(name?:string,hp?: number, damage?: number, heal?: number, initiative?: number, roleAction?: IRoleAction, defence?: IDefence, rangeType?: IAttackRange, targetBehavior?: ICountTarget) {
        this.name = name || '';
        this.hp = hp || 0;
        this.damage = damage || 0;
        this.heal = heal || 0;
        this.initiative = initiative || 0;
        this.roleAction = roleAction || new MeleeAttack();
        this.rangeType = rangeType || new MeleeType();
        this.defence = defence || new DefencePerformance();
        this.targetBehavior = targetBehavior || new SingleTarget();
    }
}
