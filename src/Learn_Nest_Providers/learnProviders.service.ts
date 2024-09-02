import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('learn_Value_Based_Providers') private readonly value: string,
  ) {}

  getHello(): string {
    return `Injected value: ${this.value}`;
  }
}
