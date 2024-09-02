import { Controller, Get } from '@nestjs/common';
import { AppService } from './learnProviders.service';

@Controller('users')
export class UserProvidersController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
