import { Unit } from "./Unit";
import { PossibleUnit } from "../types/types";
import { Randomizer } from "./Randomizer";
export class Queue {
  queueList: Unit[];
  currentUnit: Unit;
  queueSwitcher: Generator<Unit>;

  constructor(units: PossibleUnit[][], randomizer: Randomizer) {
    this.queueSwitcher = this.queueGenerator();
    this.queueList = this.randomUnitWithEqualInitiative(
      units.filter((aliveUnit) => aliveUnit) as Unit[][]
    ).reduce((accumulator, currentArray) => [
      ...accumulator,
      ...randomizer
        .shuffleListSequence(currentArray),
    ]);
    this.currentUnit = this.queueList[0];
  }

  skipUnit(): boolean {
    return (
      !this.currentUnit ||
      this.currentUnit.getInitiative() === 0 ||
      this.currentUnit.getHP() <= 0
    );
  }

  getCurrentUnit(): Unit {
    return this.currentUnit;
  }

  getUnitOrder(): Unit[] {
    return this.queueList.filter((unit) => this.isUnitCanAct(unit));
  }

  sortByInitiative(units: Unit[][]) {
    const initiativeList: Unit[] = units.flat();
    return initiativeList.sort((a, b) => {
      return a.getInitiative() - b.getInitiative();
    });
  }

  randomUnitWithEqualInitiative(units: Unit[][]): Unit[][] {
    const sortedUnitList = this.sortByInitiative(units);
    const splitedByEqualInitiativeArrays: Unit[][] = [];

    let tempArr = [];
    for (let i = sortedUnitList.length - 1; i >= 0; i -= 1) {
      sortedUnitList[i].setUnitID(i);
      if (
        i !== sortedUnitList.length - 1 &&
        sortedUnitList[i].getInitiative() !== sortedUnitList[i + 1].getInitiative()
      ) {
        splitedByEqualInitiativeArrays.push(tempArr);
        tempArr = [];
      }
      tempArr.push(sortedUnitList[i]);
      if (i === 0) {
        splitedByEqualInitiativeArrays.push(tempArr);
      }

    }
    return splitedByEqualInitiativeArrays;
  }

  *queueGenerator() {
    while (true) {
      yield* this.queueList;
    }
  }

  isUnitCanAct(unit: Unit): boolean {
    return unit.getHP() > 0 && unit.getInitiative() > 0;
  }

  next(): Unit {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.currentUnit = this.queueSwitcher.next().value;
    while (this.currentUnit?.getInitiative() === 0) {
      this.deleteParalyzation();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.currentUnit = this.queueSwitcher.next().value;
    }
    while (this.skipUnit()) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.currentUnit = this.queueSwitcher.next().value;
    }

    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (this.currentUnit === this.queueList.filter(this.isUnitCanAct)[0]) {
      this.newRound();
    }

    return this.currentUnit;
  }

  newRound(): void {
    this.queueList
      .filter((unit) => unit && unit.getHP() > 0)
      .forEach((unit) => {
        unit.setIsDefending(false);
      });
  }

  deleteParalyzation(): void {
    this.currentUnit.setInitiative(this.currentUnit.getOriginInitiative());
  }
}
