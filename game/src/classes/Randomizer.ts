import { Unit } from "./Unit";
import { Archimage } from "./models/Archimage";
import { Bandit } from "./models/Bandit";
import { Bishop } from "./models/Bishop";
import { Centaur } from "./models/Centaur";
import { ElfArcher } from "./models/ElfArcher";
import { Monk } from "./models/Monk";
import { Sirena } from "./models/Sirena";
import { Skeleton } from "./models/Skeleton";
import { SkeletonMage } from "./models/SkeletonMage";

//this class is used for creating random units order
export class Randomizer {
  unitList: typeof Unit[];

  constructor() {
    this.unitList = [
      Skeleton,
      Centaur,
      Bandit,
      ElfArcher,
      SkeletonMage,
      Archimage,
      Monk,
      Bishop,
      Sirena,
    ];
  }

  shuffleListSequence(unitsList: Unit[]): Unit[] {
    for (let i = unitsList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [unitsList[i], unitsList[j]] = [unitsList[j], unitsList[i]];
    }
    return unitsList;
  }

  generateIndex(): number { //index for mix units order
    return Math.floor(Math.random() * this.unitList.length);
  }

  generateUnit(): Unit {
    return new this.unitList[this.generateIndex()]();
  }

  generateGameBoard(rowsCount: number, columnsCount: number): Unit[][] {
    const matrix: Unit[][] = [];
    console.log(this.unitList);
    for (let i = 0; i < rowsCount; i += 1) {
      const row: Unit[] = [];
      for (let j = 0; j < columnsCount; j += 1) {
        row.push(this.generateUnit());
      }
      matrix.push(row);
    }

    return matrix;
  }
}
