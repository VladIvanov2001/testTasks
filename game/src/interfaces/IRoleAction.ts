import {GameBoard} from "../classes/board/GameBoard";

export interface IRoleAction {
    action(possibleTargets: GameBoard[], targetLocation: GameBoard | undefined): GameBoard[];
}
