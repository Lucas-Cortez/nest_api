import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user';
import { UserRepository } from '../repositories/userRepository';

@Injectable()
export class GetAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(): Promise<User[]> {
    return await this.userRepository.getAll();
  }
}
