import { Controller, Get, Inject } from '@nestjs/common';
import { JobService } from './job.service';

@Controller('get-job')
export class JobController {
  constructor(private jobservice: JobService) {}
  @Get()
  getJob() {
    return this.jobservice.getJob();
  }

  @Get('/factory-based-providers')
  getJobFactory() {
    return this.jobservice.getJobFactory();
  }
}
