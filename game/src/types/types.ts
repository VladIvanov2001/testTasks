import { Unit } from "../classes/Unit";
import { Queue } from "../classes/TurnGenerator";
import { UnitAction } from "../classes/board/UnitAction";

export type boardLocation = {
  columnNumber: number;
  rowNumber: number;
};

export type possibleBoardLocation = boardLocation | null;

export type unit = Unit | null;

export type unitAction = InstanceType<typeof UnitAction>

export type unitMatrix = Array<Array<unit>>;

export enum Team {
  OrangeTeam = "ORANGE_TEAM",
  RedTeam = "RED_TEAM",
}

export type queueSwitcher = InstanceType<typeof Queue>;

export enum TypeOfAction {
  Action = "ACTION",
  Defence = "DEFENCE",
}
