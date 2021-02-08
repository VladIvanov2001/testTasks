import { IAttackRange } from "../../interfaces/IAttackRange";
import { boardLocation, Team } from "../../types/types";
import { GameBoardAction } from "../board/GameBoardAction";

export class MeleeType implements IAttackRange {
  rangeAttack(
    unitBoardLocation: boardLocation,
    gameBoardAction: GameBoardAction
  ): boardLocation[] {
    const neighborEnemiesLocation = gameBoardAction.getAdjacentEnemiesLocation(
      unitBoardLocation
    );

    if (neighborEnemiesLocation.length) {
      return neighborEnemiesLocation;
    }

    const unitTeam: Team | null = gameBoardAction.getTeamOfUnit(
      unitBoardLocation
    );
    if (unitTeam && unitTeam === gameBoardAction.getTeamOfNextLine(unitBoardLocation)) {
      return [];
    }

    const nearestRowEnemiesLocation: boardLocation[] | null = gameBoardAction.getNearestLineEnemiesLocation(unitBoardLocation);
    if (nearestRowEnemiesLocation) {
      return nearestRowEnemiesLocation;
    }
    return [];
  }
}
