import { IRoleAction } from "../interfaces/IRoleAction";
import { IAttackRange } from "../interfaces/IAttackRange";
import { ICountTarget } from "../interfaces/ICountTarget";
import { MeleeType } from "./range/MeleeType";
import { SingleTarget } from "./targets/SingleTarget";
import { Attacker } from "./actions/attack/Attacker";
import { BoardLocation, PossibleBoardLocation } from "../types/types";
import { GameBoardAction } from "./board/GameBoardAction";

export class Unit {
  private name: string;
  private hp: number;
  private maxHP: number;
  private dealValue: number;
  private initiative: number;
  private roleAction: IRoleAction;
  private rangeType: IAttackRange;
  private targetBehavior: ICountTarget;
  private defence: boolean;
  private originInitiative: number;
  private unitID: number;

  constructor(
    name?: string,
    hp?: number,
    dealValue?: number,
    initiative?: number,
    roleAction?: IRoleAction,
    rangeType?: IAttackRange,
    targetBehavior?: ICountTarget
  ) {
    this.name = name || "";
    this.hp = hp || 0;
    this.maxHP = hp || 0;
    this.dealValue = dealValue || 0;
    this.initiative = initiative || 0;
    this.roleAction = roleAction || new Attacker();
    this.rangeType = rangeType || new MeleeType();
    this.defence = false;
    this.targetBehavior = targetBehavior || new SingleTarget();
    this.originInitiative = initiative || 0;
    this.unitID = 0;
  }

  getPossibleTargets(
    boardLocation: BoardLocation,
    gameBoardAction: GameBoardAction
  ) {
    return this.rangeType.rangeAttack(boardLocation, gameBoardAction);
  }

  getTargets(
    boardLocation: BoardLocation,
    gameBoardAction: GameBoardAction,
    enemyBoardLocation: PossibleBoardLocation
  ): BoardLocation[] {
    return this.targetBehavior.attackTargets(
      this.getPossibleTargets(boardLocation, gameBoardAction),
      enemyBoardLocation
    );
  }

  action(
    boardLocation: BoardLocation,
    gameBoardAction: GameBoardAction,
    enemyBoardLocation: PossibleBoardLocation = null
  ) {
    return this.roleAction.action(
      this,
      this.getTargets(boardLocation, gameBoardAction, enemyBoardLocation),
      gameBoardAction
    );
  }

  getName(): string {
    return this.name;
  }

  getHP(): number {
    return this.hp;
  }

  getMaxHp(): number {
    return this.maxHP;
  }

  getDealValue(): number {
    return this.dealValue;
  }

  getInitiative(): number {
    return this.initiative;
  }

  getUnitID(): number {
    return this.unitID
  }

  getOriginInitiative(): number {
    return this.originInitiative;
  }

  getDefence(): boolean {
    return this.defence;
  }

  getCountTarget(): ICountTarget {
    return this.targetBehavior;
  }

  getDealerType(): IRoleAction {
    return this.roleAction;
  }

  setHp(value: number): void {
    this.hp = value;
  }

  setInitiative(value: number): void {
    this.initiative = value;
  }

  setIsDefending(value: boolean): void {
    this.defence = value;
  }

  setUnitID(value: number): void{
    this.unitID = value;
  }
}
