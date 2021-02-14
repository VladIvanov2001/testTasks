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
        console.log('actioooon');
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

  private checkAndRemoveDeadUnits(enemiesBoardLocations: BoardLocation[]): void { // after each move we should check dead units and give them null
    enemiesBoardLocations.forEach((enemy) => {
      const enemyUnit: PossibleUnit = this.gameBoardAction.getUnitByLocation(enemy);
      if (enemyUnit && enemyUnit.getHP() <= 0) {
        this.killUnit(enemy);
      }
    });
  }

  private dealSingleTarget(unit: Unit, targetEnemyBoardLocation: BoardLocation): void {
    const unitBoardLocation = this.gameBoardAction.getUnitBoardLocation(unit);
    if (unitBoardLocation) {
      unit.action(unitBoardLocation, this.gameBoardAction, targetEnemyBoardLocation);
    }
  }

  private dealAllTargets(unit: Unit) { //this method is responsible for mass attack
    const unitBoardLocation = this.gameBoardAction.getUnitBoardLocation(unit);
    unit.action(unitBoardLocation as BoardLocation, this.gameBoardAction);
  }

  private deal(unit: Unit): void | ((targetEnemyBoardLocation: BoardLocation) => void) { // this method is responsible for unit action
    const unitBoardLocation = this.gameBoardAction.getUnitBoardLocation(unit);

    if(unitBoardLocation) {
      if (unit.getCountTarget() instanceof SingleTarget) {
        return (targetEnemyBoardLocation: BoardLocation) => {
          this.dealSingleTarget(unit, targetEnemyBoardLocation);
          this.checkAndRemoveDeadUnits(
            this.gameBoardAction.getAllEnemiesLocation(this.gameBoardAction.getUnitBoardLocation(unit) as BoardLocation),
          );
        };
      } else if (unit.getCountTarget() instanceof MultiTarget) {
        this.dealAllTargets(unit);
        this.checkAndRemoveDeadUnits(
          this.gameBoardAction.getAllEnemiesLocation(this.gameBoardAction.getUnitBoardLocation(unit) as BoardLocation),
        );
      }
    } else throw new Error('there is no any units for dealing');
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
