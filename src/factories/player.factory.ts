// src/models/player.model.ts
/**
 * A class representing a player.
 *
 * @class Player
 */
export class Player {
    /**
     * The player's name.
     *
     * @type {string}
     * @memberof Player
     */
    name: string;

    /**
     * The player's symbol (a single character).
     *
     * @type {string}
     * @memberof Player
     */
    symbol: string;

    /**
     * Creates an instance of Player.
     * @param {string} name The player's name.
     * @param {string} symbol The player's symbol.
     * @memberof Player
     */
    constructor(name: string, symbol: string) {
        this.name = name;
        this.symbol = symbol;
    }

    /**
     * Creates a new player with the given name and symbol.
     *
     * @param {string} name The player's name.
     * @param {string} symbol The player's symbol.
     * @returns {Player} A new player instance.
     * @memberof Player
     */
    static createPlayer(name: string, symbol: string): Player {
        return new Player(name, symbol);
    }
}