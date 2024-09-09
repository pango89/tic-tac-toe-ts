// src/models/cell.model.ts

import { CellNotEmptyException } from "../exceptions/cell-not-empty.exception";

/**
 * A class representing a cell.
 *
 * @class Cell
 */
export class Cell {
    /**
     * Creates an instance of Cell.
     * @param {string} symbol The symbol in the cell.
     * @memberof Cell
     */
    public symbol: string;

    constructor(symbol: string = '') {
        this.symbol = symbol;
    }
}
