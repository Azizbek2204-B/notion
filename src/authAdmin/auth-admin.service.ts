import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAdminDto } from '../admins/dto/create-admin.dto';
import { SignInDto } from './dto/sign-in.dto';
import * as bcrypt from "bcrypt";
import { Admin } from '../admins/models/admin.model';
import { AdminsService } from '../admins/admins.service';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class AuthAdminService {
  constructor(
    private readonly adminService: AdminsService,
    private readonly jwtService: JwtService,
    private readonly roleService: RolesService
  ) {}

  async signUp(createAdminDto: CreateAdminDto) {
    const existingAdmin = await this.adminService.findByEmail(createAdminDto.email);
    if (existingAdmin) {
      throw new BadRequestException("Bunday emailli foydalanuvchi mavjud");
    }

    const hashedPassword = await bcrypt.hash(createAdminDto.hashed_password, 7);
    const adminToCreate = {
      ...createAdminDto,
      hashed_password: hashedPassword,
      password: undefined, // remove raw password
    };
    const newAdmin = await this.adminService.create(adminToCreate as any);
    return newAdmin;
  }

  private async generateToken(admin: Admin, role: any) {
    const payload = {
      email: admin.email,
      roles: [role.name],
      is_active: admin.is_active,
    };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async signIn(signInDto: SignInDto) {
    const admin = await this.adminService.findByEmail(signInDto.email);

    if (!admin) {
      throw new UnauthorizedException("Email yoki parol noto‘g‘ri");
    }

    // if (!admin.is_active) {
    //   throw new UnauthorizedException("Admin bloklangan");
    // }

    const isPasswordValid = await bcrypt.compare(signInDto.password, admin.hashed_password);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Email yoki parol noto‘g‘ri");
    }

    const role = await this.roleService.findOne(admin.roleId);
    if (!role) {
      throw new BadRequestException("Admin roli topilmadi");
    }

    return this.generateToken(admin, role);
  }
}
