import { ICountTarget } from "../../interfaces/ICountTarget";
import { BoardLocation } from "../../types/types";

export class SingleTarget implements ICountTarget {
  attackTargets(
    possibleTargets: BoardLocation[],
    targetLocation: BoardLocation
  ): BoardLocation[] {
    if (
      targetLocation &&
      possibleTargets.findIndex(
        (t) => t.rowNumber === targetLocation.rowNumber && t.columnNumber === targetLocation.columnNumber,
      ) !== -1
    ) {
      return [targetLocation];
    }

    return [];
  }
}
