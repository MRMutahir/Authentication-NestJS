import { Module } from '@nestjs/common';
import { UsersService } from './learnProviders.service';
import { UserProvidersController } from './learnProviders.controller';

@Module({
  imports: [],
  controllers: [UserProvidersController],
  providers: [UsersService],
})
export class UserProviderModule {}
