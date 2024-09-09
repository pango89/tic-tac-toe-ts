// src/main.ts
import { Player } from './models/player.model';
import { TicTacToeGame } from './models/game.model';
import { DefaultWinningStrategy } from './strategies/default-winning-strategy';
import readlineSync from 'readline-sync';

// Create player 1
const player1Name = 'John';
const player1Symbol = 'X';
const player1 = new Player(player1Name, player1Symbol);

// Create player 2
const player2Name = 'Jane';
const player2Symbol = 'O';
const player2 = new Player(player2Name, player2Symbol);

// Create a new game with player 1 and player 2
const game = new TicTacToeGame(player1, player2, 3, new DefaultWinningStrategy());

while (true) {
    console.log(`Welcome to Tic Tac Toe Game`);
    console.log(`Player 1 (use X) vs player 2 (use O)`);
    console.log(`Current Player: ${game.getCurrentPlayer()}`);
    console.log('Game Board:');
    game.printBoard();

    const move = readlineSync.question(`${game.getCurrentPlayer().getName()} - Enter move (row and column, e.g. "1 2"): `);

    if (move === null) {
        console.log('Game cancelled.');
        break;
    }

    const [row, col] = move.split(' ').map(Number);

    game.makeMove(row, col);

    if (game.isGameOver()) {
        console.log('Game is over.');
        game.printBoard();
        if (game.isDraw()) {
            console.log(`Game is drawn.`);
        } else {
            console.log(`Winner: ${game.getWinner()?.getName()}`);
        }
        break;
    }
}