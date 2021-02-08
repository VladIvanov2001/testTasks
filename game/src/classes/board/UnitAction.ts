import { GameBoardAction } from "./GameBoardAction";
import { GameBoard } from "./GameBoard";
import { Queue } from "../TurnGenerator";
import { Unit } from "../Unit";
import { boardLocation } from "../../types/types";
import { unit, TypeOfAction } from "../../types/types";
import { MultiTarget } from "../targets/MultiTarget";
import { SingleTarget } from "../targets/SingleTarget";

//this class is responsible for actions which every unit can do
export class UnitAction {
  private gameBoardAction: GameBoardAction;
  private board: GameBoard;
  private turnGenerator: Queue;

  constructor(gameBoardAction: GameBoardAction, board: GameBoard, turnGenerator: Queue) {
    this.gameBoardAction = gameBoardAction;
    this.board = board;
    this.turnGenerator = turnGenerator;
  }

  doAction(
    action: TypeOfAction,
    unit: Unit,
    targetBoardLocation?: boardLocation,
  ): void | ((targetEnemyBoardLocation: boardLocation) => void) {
    const dealAction = this.deal(unit);
    switch (action) {
      case TypeOfAction.Action:
        if (!(unit.getCountTarget() instanceof MultiTarget) && dealAction && targetBoardLocation) {
          dealAction(targetBoardLocation);
        }
        this.turnGenerator.next();
        break;
      case TypeOfAction.Defence:
        this.defense(unit);
        this.turnGenerator.next();
        break;
      default:
        throw new Error('There is no such an action');
    }
  }

  private killUnit(boardLocation: boardLocation): void {
    this.board.setUnit(boardLocation, null);
  }

  private checkAndRemoveDeadUnits(enemiesBoardLocations: boardLocation[]): void {
    enemiesBoardLocations.forEach((e) => {
      const enemyUnit: unit = this.gameBoardAction.getUnitByLocation(e);
      if (enemyUnit && enemyUnit.getHP() <= 0) {
        this.killUnit(e);
      }
    });
  }

  private dealSingleTarget(unit: Unit, targetEnemyBoardLocation: boardLocation): void {
    const unitBoardLocation = this.gameBoardAction.getUnitBoardLocation(unit);
    if (unitBoardLocation) {
      unit.action(unitBoardLocation, this.gameBoardAction, targetEnemyBoardLocation);
    }
  }

  private dealAllTargets(unit: Unit) {
    const unitBoardLocation = this.gameBoardAction.getUnitBoardLocation(unit);
    unit.action(unitBoardLocation as boardLocation, this.gameBoardAction);
  }

  private deal(unit: Unit): void | ((targetEnemyBoardLocation: boardLocation) => void) {
    const unitBoardLocation = this.gameBoardAction.getUnitBoardLocation(unit);

    if (unitBoardLocation && unit.getCountTarget() instanceof SingleTarget) {
      return (targetEnemyBoardLocation: boardLocation) => {
        this.dealSingleTarget(unit, targetEnemyBoardLocation);
        this.checkAndRemoveDeadUnits(
          this.gameBoardAction.getAllEnemiesLocation(this.gameBoardAction.getUnitBoardLocation(unit) as boardLocation),
        );
      };
    } else if (unitBoardLocation && unit.getCountTarget() instanceof MultiTarget) {
      this.dealAllTargets(unit);
      this.checkAndRemoveDeadUnits(
        this.gameBoardAction.getAllEnemiesLocation(this.gameBoardAction.getUnitBoardLocation(unit) as boardLocation),
      );
    }
  }

  private defense(unit: Unit): void {
    unit.setIsDefending(true);
  }

  getPossibleTargetsOfUnit(unit: Unit): unit[] {
    return unit
      .getPossibleTargets(this.gameBoardAction.getUnitBoardLocation(unit) as boardLocation, this.gameBoardAction)
      .map((loc) => this.gameBoardAction.getUnitByLocation(loc));
  }

  getBoardLocationOfTarget(unit: Unit): boardLocation | null {
    return this.gameBoardAction.getUnitBoardLocation(unit);
  }
}
