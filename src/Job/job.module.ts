import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';

@Module({
  imports: [],
  controllers: [JobController],
  providers: [
    JobService,
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: () => {
        const isProduction = process.env.NODE_ENV === 'production';
        return isProduction ? 'ProdDBConnection' : 'DevDBConnection';
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class JobModule {}
