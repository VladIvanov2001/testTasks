import {IRoleAction} from "../interfaces/IRoleAction";

export class Unit {
    type: string;
    hp: number;
    damage: number;
    initiative: number;
    roleAction: IRoleAction;

    constructor(type: string, hp: number, damage: number, initiative: number, roleAction: IRoleAction ) {
        this.type = type;
        this.hp = hp;
        this.damage = damage;
        this.initiative = initiative;
        this.roleAction = roleAction;
    }
}
