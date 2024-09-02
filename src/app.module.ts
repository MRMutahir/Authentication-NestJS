import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './Learn_Nest_Providers/learnProviders.service';
import { UserProvidersController } from './Learn_Nest_Providers/learnProviders.controller';

@Module({
  imports: [],
  controllers: [AppController, UserProvidersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
