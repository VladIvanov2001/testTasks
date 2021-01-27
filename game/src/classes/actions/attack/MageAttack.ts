import {IRoleAction} from "../../../interfaces/IRoleAction";

export class MageAttack implements IRoleAction{
    action(): any {
        console.log('Magic attack');
    }
}
