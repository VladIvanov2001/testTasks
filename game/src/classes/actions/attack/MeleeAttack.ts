import {IRoleAction} from "../../../interfaces/IRoleAction";

export class MeleeAttack implements IRoleAction{
    action(): any {
        console.log('Melee attack');
    }
}
