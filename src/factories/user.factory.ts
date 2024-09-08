import { User } from "../models/user.model";

/**
 * Factory class to create a new User instance.
 */
export class UserFactory {
    /**
     * Creates a new User instance.
     * @returns {User} The new User instance.
     */
    static createUser(id: number, name: string): User {
        return new User(id, name);
    }
}
