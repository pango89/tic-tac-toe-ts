/**
 * An error that is thrown when a user is not found.
 */
export class UserNotFoundException extends Error {
    /**
     * Creates a new instance of UserNotFoundException.
     * @param message The error message.
     */
    constructor(message: string) {
        super(message);
        /**
         * The name of the error.
         */
        this.name = "UserNotFoundException";
    }
}
