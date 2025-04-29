import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthSelfGuard implements CanActivate {
 
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    if (request.user.id != request.params.id) {
        throw new BadRequestException({ message: "Siz faqat o'z profilingizni ko'rishingiz mumkin" });
    } 
    return true;
  }
}