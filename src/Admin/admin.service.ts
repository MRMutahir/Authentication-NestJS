import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getAdmin() {
    return [
      {
        name: 'Muhammad Mutahir',
        email: 'mutahirkareem820@gmail.com',
      },
      {
        name: 'Muhammad Talha',
        email: 'muhammadtalha@gmail.com',
      },
    ];
  }
}
