import {Unit} from "./Unit";

export class Queue{
    queueList:Unit[];
    currentUnit: Unit;

    constructor(queueList:Unit[], currentUnit: Unit) {
        this.currentUnit = currentUnit;
        this.queueList = queueList;
    }

    sortByInitiative(units:[][]): Unit[]{
        const initiativeList:Unit[] = units.flat();
        return initiativeList.sort((a,b) => {
            return a.initiative - b.initiative;
        })
    }

    randomUnitWithEqualInitiative(units:[][]):Unit[][]{
        const sortedList = this.sortByInitiative(units);
        const listDivideByRandom: Unit[][] = [];

        for (let i = 0; i < sortedList.length; i++){
            const temp: Unit[] = [];
            if (
                i !== sortedList.length + 1 &&
                sortedList[i].initiative !== sortedList[i + 1].initiative
            ) {
                listDivideByRandom.push(temp);
            }
            temp.push(sortedList[i]);
            if (i === sortedList.length - 1) {
                listDivideByRandom.push(temp);
            }
        }
        return listDivideByRandom;
    }
}
