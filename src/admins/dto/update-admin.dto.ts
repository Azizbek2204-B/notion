import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';
import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString, IsStrongPassword } from 'class-validator';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
    @IsString()
    @IsEmpty()
    first_name:string
    @IsEmail()
    @IsNotEmpty()
    email:string
    @IsStrongPassword()
    hashed_password:string
    @IsString()
    refresh_token?:string
    @IsNumber()
    roleId:bigint
    @IsString()
    is_active?:boolean
}
