import {ICountTarget} from "../../interfaces/ICountTarget";

export class SingleTarget implements ICountTarget{
    attackTargets(): any {
        console.log('attack single target')
    }
}
