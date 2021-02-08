import { IRoleAction } from "../../../interfaces/IRoleAction";
import { Unit } from "../../Unit";
import { boardLocation } from "../../../types/types";
import { GameBoardAction } from "../../board/GameBoardAction";
import { unit } from "../../../types/types";

export class Healer implements IRoleAction {
  //class for units who can heal
  action(
    unit: Unit,
    unitsBoardLocations: boardLocation[],
    gameBoardAction: GameBoardAction
  ): Unit[] {
    const unitsForHeal: Unit[] = [];
    unitsBoardLocations.forEach((boardLocation) => {
      const unitForHeal: unit = gameBoardAction.getUnitByLocation(
        boardLocation
      );
      if (unitForHeal) {
        let hpAfterHeal = 0;
        if (unitForHeal.getHP() + unit.getHP() > unitForHeal.getMaxHp()) {
          hpAfterHeal = unitForHeal.getMaxHp();
        } else {
          hpAfterHeal = unitForHeal.getHP() + unit.getDealValue();
        }
        unitForHeal.setHp(hpAfterHeal);
        unitsForHeal.push(unitForHeal);
      }
    });
    return unitsForHeal;
  }
}
