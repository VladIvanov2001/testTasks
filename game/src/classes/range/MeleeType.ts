import { IAttackRange } from "../../interfaces/IAttackRange";
import { BoardLocation, Team } from "../../types/types";
import { GameBoardAction } from "../board/GameBoardAction";

export class MeleeType implements IAttackRange {
  rangeAttack(
    unitBoardLocation: BoardLocation,
    gameBoardAction: GameBoardAction
  ): BoardLocation[] {
    const adjacentEnemiesLocation = gameBoardAction.getAdjacentEnemiesLocation(unitBoardLocation);

    if (adjacentEnemiesLocation.length) {
      return adjacentEnemiesLocation;
    }

    const unitTeam: Team | null = gameBoardAction.getTeamOfUnit(unitBoardLocation);
    if (unitTeam && unitTeam === gameBoardAction.getTeamOfNextLine(unitBoardLocation)) {
      return [];
    }

    const nearestLineEnemiesLocation: BoardLocation[] | null = gameBoardAction.getNearestLineEnemiesLocation(
      unitBoardLocation,
    );

    if (nearestLineEnemiesLocation) {
      return nearestLineEnemiesLocation;
    }

    return [];
  }
}
