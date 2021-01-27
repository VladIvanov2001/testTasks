import {IRoleAction} from "../../../interfaces/IRoleAction";

export class MultipleHeal implements IRoleAction{
    action(): any {
        console.log('heal everybody');
    }
}
