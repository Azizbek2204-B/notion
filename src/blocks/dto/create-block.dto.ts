import { ApiProperty } from "@nestjs/swagger"
import { IsNumber } from "class-validator"

export class CreateBlockDto {
    @ApiProperty({ example: "Block name", description: "Block name" })
    @IsNumber()
    typeId:number

    @ApiProperty({ example: "Block name", description: "Block name" })
    @IsNumber()
    created_by:number

    @ApiProperty({ example: "Block name", description: "Block name" })
    @IsNumber()
    parent:number

    @ApiProperty({ example: "Block name", description: "Block name" })
    @IsNumber()
    order_index:number
}
