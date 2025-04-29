import { PartialType } from '@nestjs/mapped-types';
import { CreateBlockPropertyDto } from './create-block_property.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBlockPropertyDto extends PartialType(CreateBlockPropertyDto) {
    @ApiProperty({ example: "1", description: "Block id" })
    blockId:number

    @ApiProperty({ example: "1", description: "Property id" })
    propertiesId:number

    @ApiProperty({example:"Value", description:"Property value"})
    value:string
}
