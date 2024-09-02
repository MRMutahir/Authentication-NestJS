import { Controller, Inject, Get } from '@nestjs/common';
@Controller('db')
export class DatabaseController {
  constructor(@Inject('DATABASE_CONNECTION') private dbConnection: string) {}
  @Get()
  getConnection() {
    return this.dbConnection;
  }
}
