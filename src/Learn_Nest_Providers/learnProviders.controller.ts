import { Controller, Get } from '@nestjs/common';
import { UsersService } from './learnProviders.service';

@Controller('users') // Define a route prefix if needed
export class UserProvidersController {
  constructor(private readonly userService: UsersService) {} // Inject the UsersService

  @Get()
  async userProvidersLearnController() {
    const users = await this.userService.getUsers();
    return users;
  }
}
