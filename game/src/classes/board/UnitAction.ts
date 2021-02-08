import { GameBoardAction } from "./GameBoardAction";
import { GameBoard } from "./GameBoard";
import { Queue } from "../Queue";
import { Unit } from "../Unit";
import { BoardLocation } from "../../types/types";
import { PossibleUnit, TypeOfAction } from "../../types/types";
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
    targetBoardLocation?: BoardLocation,
  ): void | ((targetEnemyBoardLocation: BoardLocation) => void) {
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

  private killUnit(boardLocation: BoardLocation): void {
    this.board.setUnit(boardLocation, null);
  }

  private checkAndRemoveDeadUnits(enemiesBoardLocations: BoardLocation[]): void {
    enemiesBoardLocations.forEach((enemy) => {
      const enemyUnit: PossibleUnit = this.gameBoardAction.getUnitByLocation(enemy);
      if (enemyUnit && enemyUnit.getHP() <= 0) {
        this.killUnit(enemy);
      }

      if(enemyUnit){
        if(enemyUnit.getHP()<=0){
          this.killUnit(enemy)
        }
      }
      else throw new Error('sorry')
    });
  }

  private dealSingleTarget(unit: Unit, targetEnemyBoardLocation: BoardLocation): void {
    const unitBoardLocation = this.gameBoardAction.getUnitBoardLocation(unit);
    if (unitBoardLocation) {
      unit.action(unitBoardLocation, this.gameBoardAction, targetEnemyBoardLocation);
    }
  }

  private dealAllTargets(unit: Unit) {
    const unitBoardLocation = this.gameBoardAction.getUnitBoardLocation(unit);
    unit.action(unitBoardLocation as BoardLocation, this.gameBoardAction);
  }

  private deal(unit: Unit): void | ((targetEnemyBoardLocation: BoardLocation) => void) {
    const unitBoardLocation = this.gameBoardAction.getUnitBoardLocation(unit);

    if (unitBoardLocation && unit.getCountTarget() instanceof SingleTarget) {
      return (targetEnemyBoardLocation: BoardLocation) => {
        this.dealSingleTarget(unit, targetEnemyBoardLocation);
        this.checkAndRemoveDeadUnits(
          this.gameBoardAction.getAllEnemiesLocation(this.gameBoardAction.getUnitBoardLocation(unit) as BoardLocation),
        );
      };
    } else if (unitBoardLocation && unit.getCountTarget() instanceof MultiTarget) {
      this.dealAllTargets(unit);
      this.checkAndRemoveDeadUnits(
        this.gameBoardAction.getAllEnemiesLocation(this.gameBoardAction.getUnitBoardLocation(unit) as BoardLocation),
      );
    }
  }

  private defense(unit: Unit): void {
    unit.setIsDefending(true);
  }

  getPossibleTargetsOfUnit(unit: Unit): PossibleUnit[] {
    return unit
      .getPossibleTargets(this.gameBoardAction.getUnitBoardLocation(unit) as BoardLocation, this.gameBoardAction)
      .map((loc) => this.gameBoardAction.getUnitByLocation(loc));
  }

  getBoardLocationOfTarget(unit: Unit): BoardLocation | null {
    return this.gameBoardAction.getUnitBoardLocation(unit);
  }
}
