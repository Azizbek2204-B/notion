import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthAdminService } from './auth-admin.service';
import { SignInDto } from './dto/sign-in.dto';
import { CreateAdminDto } from '../admins/dto/create-admin.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from '../admins/models/admin.model'; // Admin model import

@ApiTags('AuthAdmin')
@Controller('auth-admin')
export class AuthAdminController {
  constructor(private readonly authAdminService: AuthAdminService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Admin login qilish' })
  @ApiResponse({
    status: 200,
    description: 'Admin muvaffaqiyatli tizimga kirdi',
    type: Admin, // Agar sizda token ham bo‘lsa, alohida response dto yarating
  })
  @ApiResponse({ status: 401, description: 'Login ma’lumotlari noto‘g‘ri' })
  @Post("sign-in")
  signIn(@Body() signInDto: SignInDto) {
    return this.authAdminService.signIn(signInDto);
  }

  @ApiOperation({ summary: 'Admin ro‘yxatdan o‘tkazish' })
  @ApiResponse({
    status: 201,
    description: 'Admin muvaffaqiyatli ro‘yxatdan o‘tdi',
    type: Admin,
  })
  @ApiResponse({ status: 400, description: 'Admin allaqachon mavjud' })
  @Post("sign-up")
  signUp(@Body() createUserDto: CreateAdminDto) {
    return this.authAdminService.signUp(createUserDto);
  }
}