import { GameBoardAction } from "./GameBoardAction";
import { GameBoard } from "./GameBoard";
import { Queue } from "../Queue";
import { Unit } from "../Unit";
import { boardLocation } from "../../types/types";
import { unit, TypeOfAction } from "../../types/types";
import { MultiTarget } from "../targets/MultiTarget";
import { SingleTarget } from "../targets/SingleTarget";

//this class is responsible for actions which every unit can do
export class UnitAction {
  gameBoardAction: GameBoardAction;
  gameBoard: GameBoard;
  queueSwitcher: Queue;

  constructor(
    actionWithBoard: GameBoardAction,
    gameBoard: GameBoard,
    switchQueue: Queue
  ) {
    this.gameBoardAction = actionWithBoard;
    this.gameBoard = gameBoard;
    this.queueSwitcher = switchQueue;
  }

  getTargetBoardLocation(unit: Unit): boardLocation | null {
    return this.gameBoardAction.getUnitLocation(unit);
  }

  singleTargetAction(unit: Unit, enemyLocation: boardLocation): void {
    const unitBoardLocation = this.gameBoardAction.getUnitLocation(unit);
    if (unitBoardLocation) {
      unit.action(unitBoardLocation, this.gameBoardAction, enemyLocation);
    }
  }

  massTargetAction(unit: Unit): void {
    const unitBoardLocation = this.gameBoardAction.getUnitLocation(unit);
    unit.action(unitBoardLocation as boardLocation, this.gameBoardAction);
  }

  defenceAction(unit: Unit): void {
    unit.defence = true;
  }

  possibleUnitTargets(unit: Unit): unit[] {
    return unit
      .getPossibleTargets(
        this.gameBoardAction.getUnitLocation(unit) as boardLocation,
        this.gameBoardAction
      )
      .map((location) => this.gameBoardAction.getUnitByLocation(location));
  }

  getBoardLocationOfTarget(unit: Unit): boardLocation | null {
    return this.gameBoardAction.getUnitLocation(unit);
  }

  killUnit(boardLocation: boardLocation): void {//all death units are null units
    this.gameBoard.putUnitOnBoard(null, boardLocation);
  }

  checkDeadUnits(enemiesBoardLocation: boardLocation[]): void {
    enemiesBoardLocation.forEach((enemy) => {
      const unit = this.gameBoardAction.getUnitByLocation(enemy);
      if (unit && unit.hp <= 0) {
        this.killUnit(enemy);
      }
    });
  }

  action( //check target behavior and does action depends on behavior
    unit: Unit
  ): void | ((targetEnemyBoardLocation: boardLocation) => void) {
    const unitBoardLocation = this.gameBoardAction.getUnitLocation(unit);
    if (unitBoardLocation) {
      if (unit.targetBehavior instanceof MultiTarget) {//unit action and after attack you should check alive units
        this.massTargetAction(unit);
        this.checkDeadUnits(
          this.gameBoardAction.getAllEnemiesLocation(
            this.gameBoardAction.getUnitLocation(unit) as boardLocation
          )
        );
      } else if (unit.targetBehavior instanceof SingleTarget) {
        return (enemyBoardLocation: boardLocation) => {
          this.singleTargetAction(unit, enemyBoardLocation);
          this.checkDeadUnits(
            this.gameBoardAction.getAllEnemiesLocation(
              this.gameBoardAction.getUnitLocation(unit) as boardLocation
            )
          );
        };
      } else throw new Error("there is no this target behavior");
    } else throw new Error("there is no necessary unit");
  }

  doAction(
    action: TypeOfAction,
    unit: Unit,
    targetLocation?: boardLocation
  ): void | ((targetEnemyBoardLocation: boardLocation) => void) {
    const actionType = this.action(unit);
    switch (action) {
      case TypeOfAction.action:
        if (
          (unit.targetBehavior instanceof SingleTarget) &&//if unit has single target behavior you should pass target location
          targetLocation &&
          actionType
        ) {
          actionType(targetLocation);
        }
        this.queueSwitcher.next();
        break;
      case TypeOfAction.defence:
        this.defenceAction(unit);
        this.queueSwitcher.next();
        break;
      default:
        throw new Error("Error with action");
    }
  }
}
