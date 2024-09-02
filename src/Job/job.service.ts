import { Inject, Injectable } from '@nestjs/common';
@Injectable()
export class JobService {
  constructor(@Inject('DATABASE_CONNECTION') private value: string) {}
  getJob() {
    return {
      message: 'SALAM every one ',
    };
  }

  getJobFactory() {
    return this.value;
  }
}
