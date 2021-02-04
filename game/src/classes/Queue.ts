import { Unit } from "./Unit";
import { unit } from "../types/types";
import { Randomizer } from "./Randomizer";

export class Queue {
  queueList: Unit[];
  currentUnit: Unit;
  queueSwitcher: Generator<Unit>;

  constructor(units: unit[][], initBoard: Randomizer) {
    this.queueSwitcher = this.queueGenerator();
    this.queueList = this.randomUnitWithEqualInitiative(
      units.filter((aliveUnit) => aliveUnit) as Unit[][]
    ).reduce((accumulator, currentArray) => [
      ...accumulator,
      ...initBoard.mixUnitOrder(currentArray),
    ]);
    this.currentUnit = this.queueList[0];
  }

  skipUnit(): boolean {
    return (
      !this.currentUnit ||
      this.currentUnit.initiative === 0 ||
      this.currentUnit.hp <= 0
    );
  }

  sortByInitiative(units: Unit[][]) {
    const initiativeList: Unit[] = units.flat();
    return initiativeList.sort((a, b) => {
      return a.initiative - b.initiative;
    });
  }

  randomUnitWithEqualInitiative(units: Unit[][]): Unit[][] {
    const sortedList = this.sortByInitiative(units);
    const listDivideByRandom: Unit[][] = [];

    for (let i = 0; i < sortedList.length; i++) {
      const temp: Unit[] = [];
      if (
        i !== sortedList.length + 1 &&
        sortedList[i].initiative !== sortedList[i + 1].initiative
      ) {
        listDivideByRandom.push(temp);
      }
      temp.push(sortedList[i]);
      if (i === sortedList.length - 1) {
        listDivideByRandom.push(temp);
      }
    }
    return listDivideByRandom;
  }

  *queueGenerator() {
    while (true) {
      yield* this.queueList;
    }
  }

  isUnitCanAct(unit: Unit): boolean {
    return unit.hp > 0 && unit.initiative > 0;
  }

  next(): Unit {
    this.currentUnit = this.queueSwitcher.next().value;
    while (this.currentUnit?.initiative === 0) {
      this.deleteParalyzation();
      this.currentUnit = this.queueSwitcher.next().value;
    }
    while (this.skipUnit()) {
      this.currentUnit = this.queueSwitcher.next().value;
    }

    if (this.currentUnit === this.queueList.filter(this.isUnitCanAct)[0]) {
      this.newRound();
    }

    return this.currentUnit;
  }

  newRound(): void {
    this.queueList
      .filter((unit) => unit && unit.hp > 0)
      .forEach((unit) => {
        unit.defence = false;
      });
  }

  deleteParalyzation(): void {
    this.currentUnit.initiative = this.currentUnit.originInitiative;
  }
}
