import {IRoleAction} from "../../../interfaces/IRoleAction";
import {Unit} from "../../Unit";
import {boardLocation} from "../../../types/types";
import {ActionWithBoard} from "../../board/ActionWithBoard";
import { unit } from "../../../types/types";

export class Heal implements IRoleAction{
    action(unit: Unit, unitsBoardLocations: boardLocation[], actionWithBoard: ActionWithBoard): Unit[] {
        const unitsForHeal: Unit[] = [];
        unitsBoardLocations.forEach((boardLocation) =>{
            const unitForHeal: unit = actionWithBoard.getUnitByLocation(boardLocation);
            if(unitForHeal){
                let hpAfterHeal = 0;
                if(unitForHeal.hp + unit.heal > unitForHeal.maxHP){
                    hpAfterHeal = unitForHeal.maxHP;
                } else {
                    hpAfterHeal = unitForHeal.hp + unit.heal;
                }
                unitForHeal.hp = hpAfterHeal;
                unitsForHeal.push(unitForHeal);
            }
        });
        return unitsForHeal;
    }
}
