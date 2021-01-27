import {IRoleAction} from "../../../interfaces/IRoleAction";

export class RangeAttack implements IRoleAction{
    action(): any {
        console.log('Range attack');
    }
}
