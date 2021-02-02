import { boardLocation } from "../types/types";

export interface ICountTarget {
    attackTargets(possibleTargets: boardLocation[], targetLocation: boardLocation | null):boardLocation[]
}
