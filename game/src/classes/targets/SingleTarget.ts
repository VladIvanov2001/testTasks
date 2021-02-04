import { ICountTarget } from "../../interfaces/ICountTarget";
import { boardLocation } from "../../types/types";

export class SingleTarget implements ICountTarget {
  attackTargets(
    possibleTargets: boardLocation[],
    targetLocation: boardLocation
  ): boardLocation[] {
    if (
      possibleTargets.findIndex((target) => {
        target.columnNumber === targetLocation.columnNumber &&
          target.rowNumber === targetLocation.rowNumber;
      }) !== -1
    ) {
      return [targetLocation];
    }
    return [];
  }
}
