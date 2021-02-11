import { Unit } from "../classes/Unit";
import { Queue } from "../classes/Queue";
import { UnitAction } from "../classes/board/UnitAction";
import { SET_IS_HOVER } from '../redux/actions/action';

export type BoardLocation = {
  columnNumber: number;
  rowNumber: number;
};

export type PossibleBoardLocation = BoardLocation | null;

export type PossibleUnit = Unit | null;

export type UnitActionType = InstanceType<typeof UnitAction>

export type UnitMatrix = Array<Array<PossibleUnit>>;

export enum Team {
  OrangeTeam = "ORANGE_TEAM",
  RedTeam = "RED_TEAM",
}

export type QueueSwitcher = InstanceType<typeof Queue>;

export enum TypeOfAction {
  Action = "ACTION",
  Defence = "DEFENCE",
}

export type IsActiveHoverAction = {
  isHover: any;
}

export type IsActiveHover = {
  type: string,
  payload : { isHover:boolean } ,
}
