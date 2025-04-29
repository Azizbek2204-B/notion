import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class SignInDto {
  @ApiProperty({ example: "azizbek@gmail.com", description: "Admin email" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "Pa$$w0rd123", description: "Admin password" })
  @IsString()
  @MinLength(8)
  password: string;
}
