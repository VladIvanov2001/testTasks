import { Unit } from "../classes/Unit";

export type boardLocation = {
  columnNumber: number;
  rowNumber: number;
};

export type unit = Unit | null;

export enum Team {
  orangeTeam = "ORANGE_TEAM",
  redTeam = "RED_TEAM",
}

export enum TypeOfAction {
  action = "ACTION",
  defence = "DEFENCE",
}
