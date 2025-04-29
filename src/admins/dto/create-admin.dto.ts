import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength
} from "class-validator";

export class CreateAdminDto {
  @ApiProperty({ example: "Azizbek", description: "Admin first name" })
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({ example: "azizbek@gmail.com", description: "Admin email" })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: "Pa$$w0rd123", description: "Admin password" })
  @IsString()
  @MinLength(8)
  hashed_password: string;

  @ApiProperty({ example: 1, description: "Admin role id" })
  @IsNumber()
  roleId: number;

  @ApiProperty({ example: false, description: "Admin is active" })
  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}
