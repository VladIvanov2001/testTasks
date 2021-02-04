import { IAttackRange } from "../../interfaces/IAttackRange";
import { boardLocation, Team } from "../../types/types";
import { ActionWithBoard } from "../board/ActionWithBoard";

export class MeleeType implements IAttackRange {
  rangeAttack(
    unitBoardLocation: boardLocation,
    actionWithBoard: ActionWithBoard
  ): boardLocation[] {
    const neighborEnemiesLocation = actionWithBoard.getEnemyNeighborLocation(
      unitBoardLocation
    );

    if (neighborEnemiesLocation.length) {
      return neighborEnemiesLocation;
    }

    const unitTeam: Team | null = actionWithBoard.getUnitTeam(
      unitBoardLocation
    );
    if (unitTeam === actionWithBoard.getNextLineTeam(unitBoardLocation)) {
      return [];
    }

    const nearestEnemiesLocation:
      | boardLocation[]
      | null = actionWithBoard.getNearestEnemyRow(unitBoardLocation);
    if (nearestEnemiesLocation) {
      return nearestEnemiesLocation;
    }

    return [];
  }
}
