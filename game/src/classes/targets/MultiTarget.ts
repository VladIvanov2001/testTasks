import { ICountTarget } from "../../interfaces/ICountTarget";
import { BoardLocation } from "../../types/types";

export class MultiTarget implements ICountTarget {
  attackTargets(possibleTargets: BoardLocation[]): BoardLocation[] {
    return possibleTargets;
  }
}
