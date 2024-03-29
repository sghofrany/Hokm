import Player from './player.js';
export default class Team {
    constructor() {
        this.playerOne = null;
        this.playerTwo = null;

        this.name = "";

        // Hands won in the current round
        this.handsWon = 0;

        // Number of rounds won (handsWon = 7)
        this.points = 0;
    }

    /**
     * Adds a player to a team if there is a slot available and returns true, returns false otherwise.
     * @param socketId
     * @param playerId
     * @param playerName
     * @returns {boolean}
     */
    addPlayer(socketId, {playerId, playerName}) {
        if(this.playerOne === null) {
            this.playerOne = new Player(socketId, playerId, playerName);
            this.name = this.playerOne.name;
            return true;
        }

        if(this.playerTwo === null) {
            this.playerTwo = new Player(socketId, playerId, playerName);
            this.name = this.playerTwo.name;
            return true;
        }

        return false;
    }

    isFull() {
        return this.playerOne !== null && this.playerTwo !== null;
    }

    removePlayer(playerId) {
        if(this.playerOne !== null && this.playerOne.id === playerId) {
            this.playerOne = null;
            return true;
        }

        if(this.playerTwo !== null && this.playerTwo.id === playerId) {
            this.playerTwo = null;
            return true;
        }

        return false;
    }

    isPlayerInTeam(id) {
        for(const p of [this.playerOne, this.playerTwo]) {
            if(p === null) continue;

            if(p.id === id) return true;
        }

        return false;
    }

}