import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { DatabaseModule } from './Database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    DatabaseModule.forRoot('staging'),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
