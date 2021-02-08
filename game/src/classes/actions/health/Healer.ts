import { IRoleAction } from "../../../interfaces/IRoleAction";
import { Unit } from "../../Unit";
import { BoardLocation } from "../../../types/types";
import { GameBoardAction } from "../../board/GameBoardAction";
import { PossibleUnit } from "../../../types/types";

export class Healer implements IRoleAction {
  //class for units who can heal
  action(
    unit: Unit,
    unitsBoardLocations: BoardLocation[],
    gameBoardAction: GameBoardAction
  ): Unit[] {
    const unitsForHeal: Unit[] = [];
    unitsBoardLocations.forEach((boardLocation) => {
      const unitForHeal: PossibleUnit = gameBoardAction.getUnitByLocation(
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
