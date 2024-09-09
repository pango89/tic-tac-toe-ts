/**
 * Thrown when a move is attempted that is outside of the bounds of the game board.
 */
export class MoveOutOfBoundsException extends Error {
    /**
     * @param {string} [message='Move is out of bounds'] The error message.
     */
    constructor(message: string = 'Move is out of bounds') {
        super(message);
        this.name = 'MoveOutOfBoundsException';
    }
}
