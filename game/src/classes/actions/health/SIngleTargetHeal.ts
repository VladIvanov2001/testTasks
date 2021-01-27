import {IRoleAction} from "../../../interfaces/IRoleAction";

export class SingleTargetHeal implements IRoleAction{
    action(): any {
        console.log('heal single target');
    }
}
