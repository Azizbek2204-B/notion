import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreatePropertyDto {
    @ApiProperty({ example: "Property name", description: "Property name" })    
    @IsString()
    name:string

    @ApiProperty({ example: "Property description", description: "Property description" })
    @IsString()
    description:string
}
