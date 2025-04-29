import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authUserHeader = request.headers.authorization;

    if (!authUserHeader) {
      throw new UnauthorizedException("Foydalanuvchi tokeni eskirgan yoki mavjud emas");
    }

    const [bearer, token] = authUserHeader.split(' ');
    if (bearer !== 'Bearer' || !token) {
      throw new UnauthorizedException({ message: "Bearer tokeni mavjud emas" });
    }

    let user: any;
    try { 
      user = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
    } catch (error) {
      throw new UnauthorizedException({ message: "Tokenni tekshirishda xatolik yuz berdi" });
    }

    request.user = user;
    return true;
  }
}