import { IRoleAction } from "../../../interfaces/IRoleAction";
import { Unit } from "../../Unit";
import { BoardLocation, PossibleUnit } from "../../../types/types";
import { GameBoardAction } from "../../board/GameBoardAction";

export class Attacker implements IRoleAction {
  // class for units who can attack
  action(
    unit: Unit,
    enemiesBoardLocations: BoardLocation[],
    gameBoardAction: GameBoardAction
  ): Unit[] {
    const damagedUnits: Unit[] = [];
    enemiesBoardLocations.forEach((enemyBoardLocation) => {
      const enemyUnit:PossibleUnit = gameBoardAction.getUnitByLocation(enemyBoardLocation);
      if (enemyUnit) {
        const restHp = enemyUnit.getDefence()
          ? enemyUnit.getHP() - 0.5 * unit.getDealValue()//if unit in defence, incoming damage increase on 50%
          : enemyUnit.getHP() - unit.getDealValue();
        enemyUnit.setHp(restHp);
        damagedUnits.push(enemyUnit);
      }
    });
    return damagedUnits;
  }
}
