import {IDefence} from "../../../interfaces/IDefence";

export class DefencePerformance implements IDefence{
    defence(): any {
        console.log('block 50% damage');
    }
}
