import { BoardLocation, PossibleBoardLocation } from "../types/types";

export interface ICountTarget {
  attackTargets(
    possibleTargets: BoardLocation[],
    targetLocation: PossibleBoardLocation
  ): BoardLocation[];
}
