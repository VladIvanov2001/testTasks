import {IRoleAction} from "../../../interfaces/IRoleAction";

export class Heal implements IRoleAction{
    action(): any {
        console.log('heal everybody');
    }
}
