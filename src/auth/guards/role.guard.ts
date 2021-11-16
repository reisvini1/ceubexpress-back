import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

interface user {
  sub: string;
  email: string;
  name: string;
  role: boolean;
  stripe_customer_id: string;
  iat: number;
  exp: number;
}

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const headers = request.headers.authorization.replace('Bearer ', '');
      const authorization = headers.replace(' ', '');
      const user = this.jwtService.decode(authorization) as user;

      if (user.role) {
        return true;
      }
    } catch (err) {
      return false;
    }
  }
}
