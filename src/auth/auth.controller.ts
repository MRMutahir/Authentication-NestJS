import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/dto.auth';
import { AuthService } from './auth.service';
import { RefreshGuard } from './guards/refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('register')
  async registerUser(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }

  @Post('login')
  async loginUser(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }

  @Post('refresh')
  @UseGuards(RefreshGuard)
  async refreshToken(@Request() req): Promise<any> {
    const user = req.user; // Access the user object set by the RefreshGuard
    console.log('user', user)
    console.log('req', req)
    return this.authService.refreshToken(user);
  }
}
