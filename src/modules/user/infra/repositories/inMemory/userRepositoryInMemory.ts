import { UserRepository } from 'src/modules/user/app/repositories/userRepository';
import { User } from 'src/modules/user/domain/entities/user';

export class UserRepositoryInMemory implements UserRepository {
  constructor(
    private users: User[] = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@doe.com',
        password: '01234',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@doe.com',
        password: '56789',
      },
    ],
  ) {}

  async getAll(): Promise<User[]> {
    return [...this.users];
  }

  async getById(id: string): Promise<User> {
    return this.users.find((user) => user.id === Number(id));
  }
}
