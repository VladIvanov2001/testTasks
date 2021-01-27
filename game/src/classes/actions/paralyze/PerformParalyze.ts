import {IRoleAction} from "../../../interfaces/IRoleAction";

export class PerformParalyze implements IRoleAction{
    action(): any {
        console.log('target is paralyzed');
    }
}
