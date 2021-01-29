export class Board {
    coordinates:[];
    orangeTeam:[];
    redTeam:[];

    constructor(coordinates:[],orangeTeam:[], redTeam:[]) {
        this.coordinates = coordinates;
        this.orangeTeam = orangeTeam;
        this.redTeam = redTeam;
    }

    randomTeamLocation(randomTeam:[]){
        console.log('teams location in random order');
    }

    boardLocation(coordinate:number){
        console.log('return unit boardLocation');
    }
}
