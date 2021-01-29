import {ICountTarget} from "../../interfaces/ICountTarget";

export class MultiTarget implements ICountTarget{
    attackTargets(): any {
        console.log('attack on multi target');
    }
}
