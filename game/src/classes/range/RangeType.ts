import {IAttackRange} from "../../interfaces/IAttackRange";
import {boardLocation} from "../../types/types";
import {ActionWithBoard} from "../board/ActionWithBoard";
import {Heal} from "../actions/health/Heal";

export class RangeType implements IAttackRange {
    rangeAttack(unitBoardLocation: boardLocation, actionWithBoard: ActionWithBoard): boardLocation[] {
        const unit = actionWithBoard.getUnitByLocation(unitBoardLocation);

        if (unit?.roleAction instanceof Heal) {
            return actionWithBoard.getAllAlliesLocation(unitBoardLocation);
        } else {
            return actionWithBoard.getAllEnemiesLocation(unitBoardLocation);
        }
    }
}
