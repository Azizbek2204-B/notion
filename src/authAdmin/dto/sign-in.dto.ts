import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, IsStrongPassword } from "class-validator"

export class SignInDto{
    @ApiProperty({ example: "azizbek@gmail.com", description: "Admin email" })
    @IsEmail()
    readonly email:string

    @ApiProperty({ example: "12345678", description: "Admin password" })
    @IsStrongPassword()
    readonly hashed_password:string

    @ApiProperty({ example: "admin", description: "Admin roles" })
    readonly roles:string[]
}