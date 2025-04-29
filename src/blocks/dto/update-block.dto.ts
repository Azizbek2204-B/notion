import { PartialType } from '@nestjs/mapped-types';
import { CreateBlockDto } from './create-block.dto';
import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBlockDto extends PartialType(CreateBlockDto) {
    @ApiProperty({ example: "1", description: "Type id" })
    @IsNumber()
    typeId:number

    @ApiProperty({ example: "Creater", description: "Created vy" })
    @IsNumber()
    created_by:number

    @ApiProperty({ example: "", description: "Block name" })
    @IsNumber()
    parent:number

    @ApiProperty({ example: "1", description: "Order index" })
    @IsNumber()
    order_index:number
}
