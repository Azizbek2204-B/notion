import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./models/user.model";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard";
import { Roles } from "../common/decorators/role-auth.decorator";
import { JwtAuthSelfGuard } from "../common/guards/jwt-self.guard";
import { RolesGuard } from "../common/guards/roles.guard";
import { FileInterceptor } from "@nestjs/platform-express";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: "Foydalanuvchi qoʻshish" })
  @ApiResponse({
    status: 201,
    description: "Foydalanuvchi muvaffaqiyatli yaratildi",
    type: User,
  })
  @Post()
  @UseInterceptors(FileInterceptor("photo"))
  async create(@Body() createUserDto: CreateUserDto, @UploadedFile() photo:any) {
    return this.usersService.create(createUserDto, photo);
  }

  @ApiOperation({ summary: "Barcha foydalanuvchilarni olish" })
  @ApiResponse({
    status: 200,
    description: "Foydalanuvchilar muvaffaqiyatli olindi",
    type: [User],
  })
  @Roles("superadmin", "ADMIN")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: "ID orqali foydalanuvchini olish" })
  @ApiResponse({
    status: 200,
    description: "Foydalanuvchi muvaffaqiyatli topildi",
    type: User,
  })
  @UseGuards(JwtAuthSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiOperation({ summary: "Foydalanuvchini yangilash" })
  @ApiResponse({
    status: 200,
    description: "Foydalanuvchi muvaffaqiyatli yangilandi",
    type: User,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: "Foydalanuvchini oʻchirish" })
  @ApiResponse({
    status: 200,
    description: "Foydalanuvchi muvaffaqiyatli oʻchirildi",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}
