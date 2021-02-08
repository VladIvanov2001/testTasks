import { IAttackRange } from "../../interfaces/IAttackRange";
import { boardLocation } from "../../types/types";
import { GameBoardAction } from "../board/GameBoardAction";
import { Healer } from "../actions/health/Healer";

export class RangeType implements IAttackRange {
  rangeAttack(
    unitBoardLocation: boardLocation,
    gameBoardAction: GameBoardAction
  ): boardLocation[] {
    const unit = gameBoardAction.getUnitByLocation(unitBoardLocation);
    return unit && unit.getDealerType() instanceof Healer
      ? gameBoardAction.getAllAlliesLocation(unitBoardLocation)
      : gameBoardAction.getAllEnemiesLocation(unitBoardLocation);
  }
}
