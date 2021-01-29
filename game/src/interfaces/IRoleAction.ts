import {Board} from "../classes/Board";

export interface IRoleAction {
    action(possibleTargets: Board[], targetLocation: Board | undefined): Board[];
}
