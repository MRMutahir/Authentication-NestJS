import { Module, DynamicModule } from '@nestjs/common';
import { DatabaseController } from './database.controller';

@Module({ controllers: [DatabaseController] })
export class DatabaseModule {
  // Add this line to include the controller
  // forRoot ek method ka name  hen ye name kxh bhi de skte hen example ,mutahirRoot,dbRoot
  /*
Explanation:

             forRoot ek static method hai jo DynamicModule return karta hai.
             Yeh method runtime par dbName accept karta hai, aur phir DATABASE_CONNECTION provider ko accordingly set karta hai.

*/

  static forRoot(dbName: string): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'DATABASE_CONNECTION',
          useValue: `Connected to ${dbName} database!`,
        },
      ],
      exports: ['DATABASE_CONNECTION'],
    };
  }
}
