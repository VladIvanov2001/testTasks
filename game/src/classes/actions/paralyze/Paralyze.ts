import { IRoleAction } from "../../../interfaces/IRoleAction";
import { Unit } from "../../Unit";
import { boardLocation } from "../../../types/types";
import { GameBoardAction } from "../../board/GameBoardAction";
import { unit } from "../../../types/types";

export class Paralyze implements IRoleAction {
  // class for unit who can paralyze
  action(
    unit: Unit,
    enemiesBoardLocations: boardLocation[],
    gameBoardAction: GameBoardAction
  ): Unit[] {
    const paralyzedUnits: Unit[] = [];
    enemiesBoardLocations.forEach((enemyBoardLocation) => {
      const enemyUnit: unit = gameBoardAction.getUnitByLocation(
        enemyBoardLocation
      );
      if (enemyUnit) {
        enemyUnit.setInitiative(0); //if initiative is equal to 0 - unit skips turn
        paralyzedUnits.push(enemyUnit);
      }
    });
    return paralyzedUnits;
  }
}
