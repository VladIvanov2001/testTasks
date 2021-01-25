
class Skeleton implements Unit, IMeleeAttack{
    type:string;
    hp: number;
    damage: number;
    initiative: number;
    constructor(type:string, hp:number, damage: number, initiative: number) {
        this.type = type;
        this.hp = hp;
        this.damage = damage;
        this.initiative = initiative;
    }
    makeMeleeDamage(){
        console.log('bla');
    }
}
