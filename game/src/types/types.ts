import { Unit } from "../classes/Unit";

export type boardLocation = {
  columnNumber: number;
  rowNumber: number;
};

export type possibleBoardLocation = boardLocation | null;

export type unit = Unit | null;

export type unitMatrix = Array<Array<unit>>;

export enum Team {
  orangeTeam = "ORANGE_TEAM",
  redTeam = "RED_TEAM",
}

export enum TypeOfAction {
  action = "ACTION",
  defence = "DEFENCE",
}
