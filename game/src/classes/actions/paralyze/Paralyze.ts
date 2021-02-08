import { IRoleAction } from "../../../interfaces/IRoleAction";
import { Unit } from "../../Unit";
import { BoardLocation, PossibleUnit } from "../../../types/types";
import { GameBoardAction } from "../../board/GameBoardAction";

export class Paralyze implements IRoleAction {
  // class for unit who can paralyze
  action(
    unit: Unit,
    enemiesBoardLocations: BoardLocation[],
    gameBoardAction: GameBoardAction
  ): Unit[] {
    const paralyzedUnits: Unit[] = [];
    enemiesBoardLocations.forEach((enemyBoardLocation) => {
      const enemyUnit: PossibleUnit = gameBoardAction.getUnitByLocation(
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
