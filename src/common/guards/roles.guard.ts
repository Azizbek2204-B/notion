import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "../../app.constants";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (!requiredRoles) return true;

    const user = request.user;
    console.log("User:", user);

    if (!user || !user.roles) {
      throw new UnauthorizedException(
        "User not authenticated or roles missing"
      );
    }

    const hasPermission = user.roles.some((role: string) =>
      requiredRoles.includes(role)
    );

    if (!hasPermission) {
      throw new ForbiddenException({
        message: "Sizda ushbu amallarni bajarish uchun ruxsat yo'q",
      });
    }

    return true;
  }
}
