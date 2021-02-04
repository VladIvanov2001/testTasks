import { IRoleAction } from "../../../interfaces/IRoleAction";
import { Unit } from "../../Unit";
import { boardLocation } from "../../../types/types";
import { GameBoardAction } from "../../board/GameBoardAction";

export class Attack implements IRoleAction {
  // class for units who can attack
  action(
    unit: Unit,
    enemiesBoardLocations: boardLocation[],
    actionWithBoard: GameBoardAction
  ): Unit[] {
    const damagedUnits: Unit[] = [];
    enemiesBoardLocations.forEach((enemyBoardLocation) => {
      const enemyUnit = actionWithBoard.getUnitByLocation(enemyBoardLocation);
      if (enemyUnit) {
        enemyUnit.hp = enemyUnit.defence
          ? enemyUnit.hp - 0.5 * unit.damage //after defence attack is decreased on 50%
          : (enemyUnit.hp = enemyUnit.hp - unit.damage);
        damagedUnits.push(enemyUnit);
      }
    });
    return damagedUnits;
  }
}
