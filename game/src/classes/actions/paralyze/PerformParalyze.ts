import {IRoleAction} from "../../../interfaces/IRoleAction";
import {Unit} from "../../Unit";
import {boardLocation} from "../../../types/types";
import {ActionWithBoard} from "../../board/ActionWithBoard";
import {unit} from "../../../types/types";

export class PerformParalyze implements IRoleAction {
    action(unit: Unit, enemiesBoardLocations: boardLocation[], actionWithBoard: ActionWithBoard): Unit[] {
        const paralyzedUnits: Unit[] = [];
        enemiesBoardLocations.forEach((enemyBoardLocation) => {
            const enemyUnit: unit = actionWithBoard.getUnitByLocation(enemyBoardLocation);
            if (enemyUnit) {
                enemyUnit.initiative = 0;
                paralyzedUnits.push(enemyUnit);
            }
        });
        return paralyzedUnits;
    }
}
