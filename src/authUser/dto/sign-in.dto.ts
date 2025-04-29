import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsStrongPassword } from "class-validator"

export class SignInDto{
    @ApiProperty({ example: "azizbek@gmail.com", description: "User email" })
    @IsEmail()
    readonly email:string

    @ApiProperty({ example: "12345678", description: "User password" })
    @IsStrongPassword()
    readonly hashed_password:string
}