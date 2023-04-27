import { UserRepositoryInMemory } from '../../infra/repositories/inMemory/userRepositoryInMemory';
import { GetAllUsersUseCase } from './getAllUsers';

describe('GetAllUsersUseCase', () => {
  const memoryRepo = new UserRepositoryInMemory();

  it('should return all users', async () => {
    const sut = new GetAllUsersUseCase(memoryRepo);
    const output = await sut.execute();

    expect(output.length).toBe(2);
  });
});
