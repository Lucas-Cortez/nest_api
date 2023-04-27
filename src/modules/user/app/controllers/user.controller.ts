import { Controller, Get, Param } from '@nestjs/common';
import { GetAllUsersUseCase } from '../usecases/getAllUsers';
import { GetUserByIdUseCase } from '../usecases/getUserById';

@Controller('user')
export class UserController {
  constructor(
    private readonly getAllUsersService: GetAllUsersUseCase,
    private readonly getUserByIdService: GetUserByIdUseCase,
  ) {}

  @Get('/')
  async getAllUsers() {
    return await this.getAllUsersService.execute();
  }

  @Get('/:id')
  async getUser(@Param('id') id: string) {
    return await this.getUserByIdService.execute(id);
  }
}
