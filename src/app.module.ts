import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserProviderModule } from './Learn_Nest_Providers/learnProviders.module';

@Module({
  imports: [UserProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
