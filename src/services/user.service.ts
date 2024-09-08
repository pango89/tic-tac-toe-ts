import { UserFactory } from "../factories/user.factory";
import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

/**
 * A service class to manage users.
 */
export class UserService {
    private userRepository: UserRepository;

    /**
     * Creates an instance of UserService.
     */
    constructor() {
        this.userRepository = new UserRepository();
    }

    /**
     * Creates a new User with the given id and name.
     * @param id The id of the User to be created.
     * @param name The name of the User to be created.
     * @returns The User with the given id and name.
     */
    public createUser(id: number, name: string): User {
        const user = UserFactory.createUser(id, name);
        this.userRepository.createUser(id, user);
        return user;
    }

    /**
     * Gets a User by its id.
     * @param userId The id of the User.
     * @returns The User with the given id.
     */
    public getUserById(userId: number): User {
        return this.userRepository.getUserById(userId);
    }

    /**
     * Gets all User objects from the collection.
     * @returns An array of User objects.
     */
    public getUsers(): User[] {
        return this.userRepository.getUsers();
    }
}
