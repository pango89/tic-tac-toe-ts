// src/interfaces/i-winning-strategy.interface.ts

import { Cell } from "../models/cell.model";

/**
 * An interface for a winning strategy.
 *
 * @interface IWinningStrategy
 */
export interface IWinningStrategy {
    /**
     * Checks if a winner is decided based on the given board and player symbol.
     *
     * @param {Cell[][]} board The 2D array of cells representing the game board.
     * @param {string} symbol The symbol of the player to check for.
     * @returns {boolean} True if the player is a winner, false otherwise.
     * @memberof IWinningStrategy
     */
    isWinner(board: Cell[][], symbol: string): boolean;
  }