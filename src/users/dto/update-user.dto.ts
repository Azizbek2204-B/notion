import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsString, IsStrongPassword } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({ example: "John", description: "First name" })
    @IsString()
    first_name:string
    
    @ApiProperty({ example: "Doe", description: "Last name" })
    @IsString()
    last_name?:string
    
    @ApiProperty({ example: "example@gmail.com", description: "Email" })
    @IsEmail()
    email:string
    
    @ApiProperty({ example: "12345678", description: "Password" })
    @IsStrongPassword()
    hashed_password:string

    @ApiProperty({example:"https://example.com/photo.jpg", description: "Photo"})
    @IsString()
    photo?:string
    
    @ApiProperty({example:"O'zi beradi", description: "Refresh token"})
    @IsString()
    refresh_token?:string
    
    @ApiProperty({example:"https://example.com/activation_link", description: "Activation link"})
    @IsString()
    activation_link?:string
}
