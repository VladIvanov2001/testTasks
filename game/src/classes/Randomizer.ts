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

  mixUnitOrder(unitsList: Unit[]): Unit[] {
    //Fisher–Yates shuffle
    for (let i = unitsList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [unitsList[i], unitsList[j]] = [unitsList[j], unitsList[i]];
    }
    return unitsList;
  }

  getIndexForMix(): number {
    return Math.floor(Math.random() * this.mixUnitOrder.length);
  }

  generateUnit(): Unit {
    return new this.unitList[this.getIndexForMix()]();
  }

  generateGameBoard(rows: number, columns: number): Unit[][] {
    const gameBoard: Unit[][] = [];
    for (let i = 0; i < rows; i++) {
      const unitsOnRow: Unit[] = [];
      for (let j = 0; j < columns; j++) {
        unitsOnRow.push(this.generateUnit());
      }
      gameBoard.push(unitsOnRow);
    }
    return gameBoard;
  }
}
