import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user';
import { UserRepository } from '../repositories/userRepository';

@Injectable()
export class GetUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(id: string): Promise<User> {
    return await this.userRepository.getById(id);
  }
}
