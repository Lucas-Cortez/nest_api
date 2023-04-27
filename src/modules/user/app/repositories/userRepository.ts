import { User } from '../../domain/entities/user';

export interface UserRepository {
  getAll(): Promise<User[]>;
  getById(id: string): Promise<User | null>;
}
