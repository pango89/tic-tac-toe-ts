// src/tic-tac-toe-game.ts
import { Cell } from './cell.model';
import { IWinningStrategy } from '../strategies/winning-strategy.interface';
import { CellFactory } from '../factories/cell.factory';
import { Player } from './player.model';
import { MoveOutOfBoundsException } from '../exceptions/out-of-bounds.exception';

export class TicTacToeGame {
    /**
     * The first player.
     */
    private readonly player1: Player;
    /**
     * The second player.
     */
    private readonly player2: Player;
    /**
     * The strategy for determining a winner.
     */
    private readonly winningStrategy: IWinningStrategy;
    /**
     * The game board.
     */
    private board: Cell[][];
    /**
     * The player whose turn it is.
     */
    private currentPlayer: Player;
    /**
     * The winner of the game, or null if the game is not over.
     */
    private winner: Player | null;

    /**
     * Creates a new game.
     * @param player1 The first player.
     * @param player2 The second player.
     * @param size The size of the board.
     * @param winningStrategy The strategy for determining a winner.
     */
    constructor(player1: Player, player2: Player, size: number, winningStrategy: IWinningStrategy) {
        this.player1 = player1;
        this.player2 = player2;
        this.winningStrategy = winningStrategy;
        this.board = this.initializeBoard(size);
        this.currentPlayer = player1;
        this.winner = null;
    }

    /**
     * Initializes the game board.
     * @param size The size of the board.
     * @returns The initialized board.
     */
    private initializeBoard(size: number): Cell[][] {
        const board: Cell[][] = [];
        for (let i = 0; i < size; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < size; j++) {
                row.push(CellFactory.createCell(' '));
            }
            board.push(row);
        }
        return board;
    }

    /**
     * Makes a move in the game.
     * @param row The row of the move.
     * @param col The column of the move.
     * @returns True if the move was successful, false otherwise.
     */
    public makeMove(row: number, col: number): boolean {
        // add code to check out of bounds move
        if (row < 0 || row >= this.board.length || col < 0 || col >= this.board[0].length) {
            throw new MoveOutOfBoundsException();
        }

        if (this.winner !== null) {
            return false; // Game is already over
        }

        if (this.board[row][col].symbol !== ' ') {
            return false; // Cell is already occupied
        }

        this.board[row][col].symbol = this.currentPlayer.getSymbol();
        this.checkForWinner();

        // Switch current player
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;

        return true;
    }

    /**
     * Checks if there is a winner of the game.
     */
    public checkForWinner(): void {
        if (this.winningStrategy.isWinner(this.board, this.currentPlayer.getSymbol())) {
            this.winner = this.currentPlayer;
        }
    }

    /**
     * Checks if the game is over.
     * @returns True if the game is over, false otherwise.
     */
    public isGameOver(): boolean {
        return this.winner !== null || this.isDraw();
    }

    /**
     * Checks if the game is a draw or not.
     * @returns True if the game is a draw, false otherwise.
     */
    public isDraw(): boolean {
        return this.winner === null && this.board.every(row => row.every(cell => cell.symbol !== ' '));
    }

    /**
     * Gets the game board.
     * @returns The game board.
     */
    public getBoard(): Readonly<Cell[][]> {
        return this.board;
    }

    /**
     * Gets the player whose turn it is.
     * @returns The player whose turn it is.
     */
    public getCurrentPlayer(): Player {
        return this.currentPlayer;
    }

    /**
     * Gets the winner of the game, or null if the game is not over.
     * @returns The winner of the game, or null if the game is not over.
     */
    public getWinner(): Player | null {
        return this.winner;
    }

    /**
     * Prints the game board.
     */
    public printBoard(): void {
        this.board.forEach((row, index) => {
            console.log(`${row.map(cell => cell.symbol).join(' | ')}`);
        });
    }
}
