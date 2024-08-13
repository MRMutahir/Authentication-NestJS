import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
  } from '@nestjs/common';
  import { Request } from 'express';
  import { JwtService } from '@nestjs/jwt';
  
  @Injectable()
  export class RefreshGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest<Request>();
      const token = this.extractTokenFromHeader(request);
  
      if (!token) {
        throw new UnauthorizedException('Refresh token is missing.');
      }
  
      try {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: process.env.jwtRefreshTokenKey,
        });
        request['user'] = payload; // Store the payload in request for later use
      } catch (error) {
        throw new UnauthorizedException('Invalid refresh token.');
      }
  
      return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const token = request.headers['refresh'] as string | undefined;
      return token ? token : undefined;
    }
  }
  