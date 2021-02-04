import { IAttackRange } from "../../interfaces/IAttackRange";
import { boardLocation, Team } from "../../types/types";
import { GameBoardAction } from "../board/GameBoardAction";

export class MeleeType implements IAttackRange {
  rangeAttack(
    unitBoardLocation: boardLocation,
    gameBoardAction: GameBoardAction
  ): boardLocation[] {
    const neighborEnemiesLocation = gameBoardAction.getEnemyNeighborLocation(
      unitBoardLocation
    );

    if (neighborEnemiesLocation.length) {
      return neighborEnemiesLocation;
    }

    const unitTeam: Team | null = gameBoardAction.getUnitTeam(
      unitBoardLocation
    );
    if (unitTeam === gameBoardAction.getNextLineTeam(unitBoardLocation)) {
      return [];
    }

    const nearestEnemiesLocation:
      | boardLocation[]
      | null = gameBoardAction.getNearestEnemyRow(unitBoardLocation);
    if (nearestEnemiesLocation) {
      return nearestEnemiesLocation;
    }

    return [];
  }
}
