// src/player.ts
/**
 * A class representing a player in a game.
 */
export class Player {
  /**
   * The player's name.
   */
  private readonly name: string;

  /**
   * The player's symbol.
   */
  private readonly symbol: string;

  /**
   * Creates a new player.
   * @param name The player's name.
   * @param symbol The player's symbol.
   */
  constructor(name: string, symbol: string) {
    this.name = name;
    this.symbol = symbol;
  }

  /**
   * Gets the player's name.
   * @returns The player's name.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Gets the player's symbol.
   * @returns The player's symbol.
   */
  public getSymbol(): string {
    return this.symbol;
  }

  /**
   * Returns a string representation of the player.
   * @returns A string representation of the player.
   */
  public toString(): string {
    return `${this.name} (${this.symbol})`;
  }
}
