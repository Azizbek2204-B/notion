import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    @ApiProperty({ example: "Admin", description: "Role name" })
    @IsString()
    name:string

    @ApiProperty({ example: "Admin role", description: "Role description" })
    @IsString()
    description:string
}
