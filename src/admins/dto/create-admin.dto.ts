import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString, IsStrongPassword } from "class-validator";

export class CreateAdminDto {
    @ApiProperty({ example: "Azizbek", description: "Admin first name" })
    @IsString()
    first_name:string
    
    @ApiProperty({ example: "azizbek@gmail.com", description: "Admin email" })
    @IsEmail()
    @IsNotEmpty()
    email:string

    @ApiProperty({ example: "12345678", description: "Admin password" })
    @IsStrongPassword()
    hashed_password:string

    @ApiProperty({ example: "O'zi yozadi", description: "Refresh token" })
    @IsString()
    refresh_token?:string

    @ApiProperty({example:"1", description: "Admin role id"})
    @IsNumber()
    roleId:bigint

    @ApiProperty({example:"false", description: "Admin is active"})
    @IsBoolean()
    is_active?:boolean
}
