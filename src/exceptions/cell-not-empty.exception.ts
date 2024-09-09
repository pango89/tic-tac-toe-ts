// src/exceptions/cell-not-empty.exception.ts
/**
 * A custom exception thrown when a cell is not empty.
 *
 * @class CellNotEmptyException
 * @extends {Error}
 */
export class CellNotEmptyException extends Error {
    /**
     * Creates an instance of CellNotEmptyException.
     * @param {string} message The error message.
     * @memberof CellNotEmptyException
     */
    constructor(message: string = 'Cell is not empty') {
        super(message);
        this.name = 'CellNotEmptyException';
    }
}