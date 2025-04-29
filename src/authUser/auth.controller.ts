import { Body, Controller, HttpCode, HttpStatus, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../users/models/user.model'; // Foydalanuvchi modelini import qilamiz
import { FileInterceptor } from "@nestjs/platform-express";

@ApiTags('Auth')
@Controller('user')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login qilish' })
  @ApiResponse({
    status: 200,
    description: 'Foydalanuvchi muvaffaqiyatli tizimga kirdi',
    type: User, // yoki agar siz token + user qaytarsangiz, alohida response DTO kerak bo‘ladi
  })
  @ApiResponse({
    status: 401,
    description: 'Login yoki parol noto‘g‘ri',
  })
  @Post("sign-in")
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @ApiOperation({ summary: 'Ro‘yxatdan o‘tish' })
  @ApiResponse({
    status: 201,
    description: 'Foydalanuvchi muvaffaqiyatli yaratildi',
    type: User,
  })
  @ApiResponse({
    status: 400,
    description: 'Foydalanuvchi allaqachon mavjud yoki ma’lumotlar noto‘g‘ri',
  })
  @Post("sign-up")
  @UseInterceptors(FileInterceptor("photo"))
  signUp(@Body() createUserDto: CreateUserDto, @UploadedFile() photo:any) {
    return this.authService.signUp(createUserDto, photo);
  }
}
