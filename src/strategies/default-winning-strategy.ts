// src/strategies/default-winning-strategy.ts
import { IWinningStrategy } from './winning-strategy.interface';
import { Cell } from '../models/cell.model';

/**
 * The default winning strategy for Tic Tac Toe.
 *
 * @implements {IWinningStrategy}
 */
export class DefaultWinningStrategy implements IWinningStrategy {
  /**
   * Checks if the given player has won the game.
   *
   * @param {Cell[][]} board The 2D array of cells representing the game board.
   * @param {string} symbol The symbol of the player to check for.
   * @returns {boolean} True if the player is a winner, false otherwise.
   */
  isWinner(board: Cell[][], symbol: string): boolean {
    // Check rows for a win
    if (this.checkRows(board, symbol)) {
      return true;
    }

    // Check columns for a win
    if (this.checkColumns(board, symbol)) {
      return true;
    }

    // Check main diagonal for a win
    if (this.checkMainDiagonal(board, symbol)) {
      return true;
    }

    // Check cross diagonal for a win
    if (this.checkCrossDiagonal(board, symbol)) {
      return true;
    }

    return false;
  }

  /**
   * Checks if the given player has won by checking rows.
   *
   * @param {Cell[][]} board The 2D array of cells representing the game board.
   * @param {string} symbol The symbol of the player to check for.
   * @returns {boolean} True if the player is a winner, false otherwise.
   * @private
   */
  private checkRows(board: Cell[][], symbol: string): boolean {
    for (const row of board) {
      if (row.every(cell => cell.symbol === symbol)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Checks if the given player has won by checking columns.
   *
   * @param {Cell[][]} board The 2D array of cells representing the game board.
   * @param {string} symbol The symbol of the player to check for.
   * @returns {boolean} True if the player is a winner, false otherwise.
   * @private
   */
  private checkColumns(board: Cell[][], symbol: string): boolean {
    for (let col = 0; col < board[0].length; col++) {
      if (board.every(row => row[col].symbol === symbol)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Checks if the given player has won by checking the main diagonal.
   *
   * @param {Cell[][]} board The 2D array of cells representing the game board.
   * @param {string} symbol The symbol of the player to check for.
   * @returns {boolean} True if the player is a winner, false otherwise.
   * @private
   */
  private checkMainDiagonal(board: Cell[][], symbol: string): boolean {
    for (let i = 0; i < board.length; i++) {
      if (board[i][i].symbol !== symbol) {
        return false;
      }
    }
    return true;
  }

  /**
   * Checks if the given player has won by checking the cross diagonal.
   *
   * @param {Cell[][]} board The 2D array of cells representing the game board.
   * @param {string} symbol The symbol of the player to check for.
   * @returns {boolean} True if the player is a winner, false otherwise.
   * @private
   */
  private checkCrossDiagonal(board: Cell[][], symbol: string): boolean {
    for (let i = 0; i < board.length; i++) {
      if (board[i][board.length - 1 - i].symbol !== symbol) {
        return false;
      }
    }
    return true;
  }
}
