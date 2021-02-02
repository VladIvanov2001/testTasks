import {IRoleAction} from "../interfaces/IRoleAction";
import {IAttackRange} from "../interfaces/IAttackRange";
import {ICountTarget} from "../interfaces/ICountTarget";
import {MeleeType} from "./range/MeleeType";
import {SingleTarget} from "./targets/SingleTarget";
import {Attack} from "./actions/attack/Attack";

export class Unit {
    name: string;
    hp: number;
    maxHP: number;
    damage: number;
    heal: number;
    initiative: number;
    roleAction: IRoleAction;
    rangeType: IAttackRange;
    targetBehavior: ICountTarget;
    defence: boolean;
    originInitiative: number;

    constructor(name?:string,hp?: number, damage?: number, heal?: number, initiative?: number, roleAction?: IRoleAction, rangeType?: IAttackRange, targetBehavior?: ICountTarget) {
        this.name = name || '';
        this.hp = hp || 0;
        this.maxHP = hp || 0;
        this.damage = damage || 0;
        this.heal = heal || 0;
        this.initiative = initiative || 0;
        this.roleAction = roleAction || new Attack();
        this.rangeType = rangeType || new MeleeType();
        this.defence = false;
        this.targetBehavior = targetBehavior || new SingleTarget();
        this.originInitiative = initiative || 0;
    }
}
