import {ActionWithBoard} from "./ActionWithBoard";
import {GameBoard} from "./GameBoard";
import {Queue} from "../Queue";
import {Unit} from "../Unit";
import {boardLocation} from "../../types/types";
import {unit, TypeOfAction} from "../../types/types";
import {MultiTarget} from "../targets/MultiTarget";

export class UnitAction {
    actionWithBoard: ActionWithBoard;
    gameBoard: GameBoard;
    switchQueue: Queue;

    constructor(actionWithBoard: ActionWithBoard, gameBoard: GameBoard, switchQueue: Queue) {
        this.actionWithBoard = actionWithBoard;
        this.gameBoard = gameBoard;
        this.switchQueue = switchQueue;
    }

    getTargetBoardLocation(unit: Unit): boardLocation | null {
        return this.actionWithBoard.getUnitLocation(unit);
    }

    singleTargetAction(unit: Unit, enemyLocation: boardLocation): void {
        const unitBoardLocation = this.actionWithBoard.getUnitLocation(unit);
        if (unitBoardLocation) {
            unit.action(unitBoardLocation, this.actionWithBoard, enemyLocation);
        }
    }

    massTargetAction(unit: Unit): void {
        const unitBoardLocation = this.actionWithBoard.getUnitLocation(unit);
        unit.action(unitBoardLocation as boardLocation, this.actionWithBoard);
    }

    defenceAction(unit: Unit): void {
        unit.defence = true;
    }

    possibleUnitTargets(unit: Unit): unit[] {
        return unit.getPossibleTargets(this.actionWithBoard.getUnitLocation(unit) as boardLocation, this.actionWithBoard)
            .map((location) => this.actionWithBoard.getUnitByLocation(location))
    }

    getBoardLocationOfTarget(unit: Unit): boardLocation | null {
        return this.actionWithBoard.getUnitLocation(unit);
    }

    killUnit(boardLocation: boardLocation): void {
        this.gameBoard.putUnitOnBoard(null, boardLocation);
    }

    checkDeadUnits(enemiesBoardLocation: boardLocation[]): void {
        enemiesBoardLocation.forEach((enemy) => {
            const unit = this.actionWithBoard.getUnitByLocation(enemy);
            if (unit && unit.hp <= 0) {
                this.killUnit(enemy);
            }
        });
    }

    action(unit: Unit): void | ((targetEnemyBoardLocation: boardLocation) => void) {
        const unitBoardLocation = this.actionWithBoard.getUnitLocation(unit);
        if (unitBoardLocation && unit.targetBehavior instanceof MultiTarget) {
            this.massTargetAction(unit);
            this.checkDeadUnits(this.actionWithBoard.getAllEnemiesLocation(this.actionWithBoard.getUnitLocation(unit) as boardLocation));
        } else {
            return (enemyBoardLocation: boardLocation) => {
                this.singleTargetAction(unit, enemyBoardLocation);
                this.checkDeadUnits(
                    this.actionWithBoard.getAllEnemiesLocation(this.actionWithBoard.getUnitLocation(unit) as boardLocation),
                );
            };
        }
    }

    doAction(action: TypeOfAction, unit: Unit, targetLocation?: boardLocation): void | ((targetEnemyBoardLocation: boardLocation) => void) {
        const actionType = this.action(unit);
        switch (action) {
            case TypeOfAction.action:
                if (!(unit.targetBehavior instanceof MultiTarget) && targetLocation && actionType) {
                    actionType(targetLocation);
                }
                this.switchQueue.next();
                break;
            case TypeOfAction.defence:
                this.defenceAction(unit);
                this.switchQueue.next();
                break;
            default: throw new Error('Error with action');
        }
    }
}
