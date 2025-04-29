import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { AdminsService } from "./admins.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Admin } from "./models/admin.model";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard";
import { Roles } from "../common/decorators/role-auth.decorator";
import { JwtAuthSelfGuard } from "../common/guards/jwt-self.guard";
import { RolesGuard } from "../common/guards/roles.guard";

@ApiTags("Admins")
@Controller("admins")
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @ApiOperation({ summary: "Admin qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Admin muvaffaqiyatli yaratildi",
    type: Admin,
  })
  @Roles("SUPERADMIN")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminsService.create(createAdminDto);
  }

  @ApiOperation({ summary: "Barcha adminlarni olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha adminlar ro‘yxati",
    type: [Admin],
  })
  @Roles("SUPERADMIN")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.adminsService.findAll();
  }

  @ApiOperation({ summary: "Adminni ID orqali olish" })
  @ApiResponse({
    status: 200,
    description: "Admin topildi",
    type: Admin,
  })
  @ApiResponse({ status: 404, description: "Admin topilmadi" })
  @UseGuards(JwtAuthSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adminsService.findOne(+id);
  }

  @ApiOperation({ summary: "Adminni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Admin muvaffaqiyatli yangilandi",
    type: Admin,
  })
  @Roles("SUPERADMIN")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.update(+id, updateAdminDto);
  }

  @ApiOperation({ summary: "Email orqali admin topish" })
  @ApiResponse({
    status: 200,
    description: "Admin email orqali topildi",
    type: Admin,
  })
  @Get("email/:email")
  findByEmail(@Param("email") email: string) {
    return this.adminsService.findByEmail(email);
  }

  @ApiOperation({ summary: "Adminni o‘chirish" })
  @ApiResponse({
    status: 200,
    description: "Admin muvaffaqiyatli o‘chirildi",
  })
  @Roles("SUPERADMIN")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.adminsService.remove(+id);
  }
}
