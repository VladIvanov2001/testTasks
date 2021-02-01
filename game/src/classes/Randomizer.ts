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

export class Randomizer{
    unitList: typeof Unit[];

    constructor() {
        this.unitList = [Skeleton, Centaur, Bandit, ElfArcher, SkeletonMage, Archimage, Monk, Bishop, Sirena];
    }

    mixUnitOrder(unitsList: Unit[]): Unit[]{
        for (let i = unitsList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [unitsList[i], unitsList[j]] = [unitsList[j], unitsList[i]];
        }
        return unitsList;
    }

    getIndexForMix(): number{
        return Math.floor(Math.random() * this.mixUnitOrder.length);
    }

    generateUnit(): Unit{
new this.mixUnitOrder[this.getIndexForMix()]();
        return newUnit;
    }
}
