/**
 * A class representing a user.
 *
 * @class User
 */
export class User {
    /**
     * The user's id.
     *
     * @type {number}
     * @memberof User
     */
    id: number;

    /**
     * The user's name.
     *
     * @type {string}
     * @memberof User
     */
    name: string;

    /**
     * Creates an instance of User.
     * @param {number} id The user's id.
     * @param {string} name The user's name.
     * @memberof User
     */
    constructor(id: number, name: string) {
        this.name = name;
        this.id = id;
    }
}
