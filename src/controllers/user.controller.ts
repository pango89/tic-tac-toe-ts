import { User } from "../models/user.model";
import { UserService } from "../services/user.service";

export class UserController {
    private userService: UserService;

    /**
     * Creates an instance of UserController.
     * @remarks
     * Creates an instance of UserController and initializes a new instance of UserService.
     */
    constructor() {
        this.userService = new UserService();
    }

    /**
     * Creates a new User with the given id and name.
     * @param id the id of the User to be created
     * @param name the name of the User to be created
     * @returns a User object with the given id and name
     */
    public createUser(id: number, name: string): User {
        return this.userService.createUser(id, name);
    }

    /**
     * @description Gets a User by its id.
     * @param id The id of the User.
     * @returns The User with the given id.
     */
    public getUserById(userId: number): User {
        return this.userService.getUserById(userId);
    }

    /**
     * @description Gets all Users.
     * @returns An array of all Users.
     */
    public getUsers(): User[] {
        return this.userService.getUsers();
    }
}
