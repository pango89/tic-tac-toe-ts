// tests/user.repository.spec.ts

import { UserRepository } from '../src/repositories/user.repository';
import { User } from '../src/models/user.model';
import { UserNotFoundException } from '../src/exceptions/user-not-found.exception';

describe('UserRepository', () => {
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = new UserRepository();
  });

  // add test method for getting user by id
  it('should get a user by id', () => {
    const user = new User(1, 'John Doe');
    userRepository.createUser(user.id, user);
    expect(userRepository.getUserById(user.id)).toBe(user);
  });

  it('should create a new user', () => {
    const user = new User(1, 'John Doe');
    userRepository.createUser(user.id, user);
    expect(userRepository.getUserById(user.id)).toBe(user);
  });

  it('should throw an error when getting a non-existent user', () => {
    expect(() => userRepository.getUserById(1)).toThrow(UserNotFoundException);
  });
});