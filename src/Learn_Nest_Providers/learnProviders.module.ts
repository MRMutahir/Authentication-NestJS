import { Module } from '@nestjs/common';
import { UserProvidersController } from './learnProviders.controller';
import { AppService } from './learnProviders.service';

const SOME_VALUE = 'This is a constant value for learning Value-Based Providers';

@Module({
  imports: [],
  controllers: [UserProvidersController],
  providers: [
    {
      provide: 'learn_Value_Based_Providers',
      useValue: SOME_VALUE,
    },
    AppService,
  ],
  exports: ['learn_Value_Based_Providers'],
})
export class UserProviderModule {}
