import { IAttackRange } from "../../interfaces/IAttackRange";
import { boardLocation } from "../../types/types";
import { GameBoardAction } from "../board/GameBoardAction";
import { Heal } from "../actions/health/Heal";

export class RangeType implements IAttackRange {
  rangeAttack(
    unitBoardLocation: boardLocation,
    gameBoardAction: GameBoardAction
  ): boardLocation[] {
    const unit = gameBoardAction.getUnitByLocation(unitBoardLocation);

    if (unit?.roleAction instanceof Heal) {
      return gameBoardAction.getAllAlliesLocation(unitBoardLocation);
    } else {
      return gameBoardAction.getAllEnemiesLocation(unitBoardLocation);
    }
  }
}
