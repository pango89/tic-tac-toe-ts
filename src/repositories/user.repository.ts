import { UserNotFoundException } from "../exceptions/user-not-found.exception";
import { User } from "../models/user.model";

/**
 * A class to manage a collection of Users.
 */
export class UserRepository {
    /**
     * The collection of Users. Each User is identified by a unique id.
     */
    private users: Map<number, User>;

    /**
     * Creates an instance of UserRepository.
     */
    constructor() {
        this.users = new Map<number, User>();
    }

    /**
     * Adds a new User to the collection.
     * @param id The id of the User to be created.
     * @param user The User object to be created.
     */
    public createUser(id: number, user: User): void {
        this.users.set(id, user);
    }

    /**
     * Gets a User object by its id from the collection.
     * @param id The id of the User to be retrieved.
     * @returns The User object with the given id, or undefined if no User is found.
     */
    public getUserById(id: number): User {
        const user = this.users.get(id);
        if (user) return user;
        else throw new UserNotFoundException("No user found.");
    }

    /**
     * Gets all User objects from the collection.
     * @returns An array of User objects.
     */
    public getUsers(): User[] {
        return Array.from(this.users.values());
    }
}
