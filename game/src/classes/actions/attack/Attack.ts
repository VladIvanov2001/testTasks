import {IRoleAction} from "../../../interfaces/IRoleAction";
import {Unit} from "../../Unit";
import {boardLocation} from "../../../types/types";
import {ActionWithBoard} from "../../board/ActionWithBoard";

export class Attack implements IRoleAction{
    action(unit: Unit, enemiesBoardLocations: boardLocation[], actionWithBoard: ActionWithBoard): Unit[] {
        const damagedUnits: Unit[] = [];

        enemiesBoardLocations.forEach((enemyBoardLocation) =>{
            const enemyUnit = actionWithBoard.getUnitByLocation(enemyBoardLocation);
            if(enemyUnit){
                enemyUnit.hp = enemyUnit.defence ? enemyUnit.hp - 0.5 * unit.damage : enemyUnit.hp = enemyUnit.hp - unit.damage;
                damagedUnits.push(enemyUnit);
            }
        });
        return damagedUnits;
    }
}
