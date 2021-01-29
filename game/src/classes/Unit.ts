import {IRoleAction} from "../interfaces/IRoleAction";
import {IDefence} from "../interfaces/IDefence";
import {IAttackRange} from "../interfaces/IAttackRange";
import {ICountTarget} from "../interfaces/ICountTarget";

export class Unit {
    name: string;
    hp: number;
    damage: number;
    heal: number;
    initiative: number;
    roleAction: IRoleAction;
    rangeType: IAttackRange;
    defence: IDefence;
    targetType: ICountTarget;

    constructor(name:string,hp: number, damage: number, heal: number, initiative: number, roleAction: IRoleAction, defence: IDefence, rangeType: IAttackRange, targetType: ICountTarget) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
        this.heal = heal;
        this.initiative = initiative;
        this.roleAction = roleAction;
        this.rangeType = rangeType;
        this.defence = defence;
        this.targetType = targetType;
    }
}
