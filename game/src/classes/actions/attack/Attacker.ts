import { IRoleAction } from "../../../interfaces/IRoleAction";
import { Unit } from "../../Unit";
import { boardLocation, unit } from "../../../types/types";
import { GameBoardAction } from "../../board/GameBoardAction";

export class Attacker implements IRoleAction {
  // class for units who can attack
  action(
    unit: Unit,
    enemiesBoardLocations: boardLocation[],
    gameBoardAction: GameBoardAction
  ): Unit[] {
    const damagedUnits: Unit[] = [];
    enemiesBoardLocations.forEach((enemyBoardLocation) => {
      const enemyUnit:unit = gameBoardAction.getUnitByLocation(enemyBoardLocation);
      if (enemyUnit) {
        const restHp = enemyUnit.getDefence()
          ? enemyUnit.getHP() - 0.5 * unit.getDealValue()
          : enemyUnit.getHP() - unit.getDealValue();
        enemyUnit.setHp(restHp);
        damagedUnits.push(enemyUnit);
      }
    });
    return damagedUnits;
  }
}
