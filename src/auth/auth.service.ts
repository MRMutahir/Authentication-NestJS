import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/dto.auth';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(dto: LoginDto) {
    return this.validatUser(dto);
  }

  async validatUser(dto: LoginDto) {
    const user = await this.userService.findByEmail(dto.username);
    if (user && await compare(dto.password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Username or password is incorrect');
  }
}
