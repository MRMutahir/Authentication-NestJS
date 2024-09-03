import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './Admin/admin.controller';
import { AdminService } from './Admin/admin.service';
import { AdminModule } from './Admin/admin.module';

@Module({
  imports: [AdminModule],
  controllers: [AppController, AdminController],
  providers: [AppService, AdminService],
})
export class AppModule {}
