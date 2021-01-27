import {IRoleAction} from "../interfaces/IRoleAction";
import {IDefence} from "../interfaces/IDefence";

export class Unit {
    type: string;
    hp: number;
    damage: number;
    initiative: number;
    roleAction: IRoleAction;
    defence: IDefence;

    constructor(type: string, hp: number, damage: number, initiative: number, roleAction: IRoleAction, defence: IDefence) {
        this.type = type;
        this.hp = hp;
        this.damage = damage;
        this.initiative = initiative;
        this.roleAction = roleAction;
        this.defence = defence;
    }
}
