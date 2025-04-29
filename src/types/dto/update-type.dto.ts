import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeDto } from './create-type.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTypeDto extends PartialType(CreateTypeDto) {
    @ApiProperty({ example: "Type name", description: "Type name" })
    @IsString()
    name:string
    
    @ApiProperty({ example: "Type description", description: "Type description" })
    @IsString()
    description:string
}
