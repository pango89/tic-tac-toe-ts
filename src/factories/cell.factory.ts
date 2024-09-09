// src/factories/cell.factory.ts

import { Cell } from "../models/cell.model";

/**
 * A factory class for creating Cell instances.
 *
 * @class CellFactory
 */
export class CellFactory {
    /**
     * Creates a new Cell instance with the given symbol.
     *
     * @static
     * @param {string} symbol The symbol for the cell.
     * @returns {Cell} A new Cell instance.
     * @memberof CellFactory
     */
    static createCell(symbol: string = ''): Cell {
        return new Cell(symbol);
    }
}
