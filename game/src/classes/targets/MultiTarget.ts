import { ICountTarget } from "../../interfaces/ICountTarget";
import { boardLocation } from "../../types/types";

export class MultiTarget implements ICountTarget {
  attackTargets(possibleTargets: boardLocation[]): boardLocation[] {
    return possibleTargets;
  }
}
