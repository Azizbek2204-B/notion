import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateTypeDto {
    @ApiProperty({ example: "Type name", description: "Type name" })
    @IsString()
    name:string

    @ApiProperty({ example: "Type description", description: "Type description" })
    @IsString()
    description:string
}
