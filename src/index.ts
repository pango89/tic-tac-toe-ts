import { UserController } from './controllers/user.controller';

const userController = new UserController();

// Create a new user
const userId = 1;
const userName = 'John Doe';
const user = userController.createUser(userId, userName);
console.log(`Created user: ${user.id} - ${user.name}`);

// Get a user by ID
const getUserById = userController.getUserById(userId);
console.log(`Got user: ${getUserById.id} - ${getUserById.name}`);

userController.createUser(2, "Jane Doe");

// Get all users
const users = userController.getUsers();
console.log(`Got users: ${users.map(user => user.id + ' - ' + user.name)}`);