import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateRoleDto {
    @ApiProperty({ example: "Admin", description: "Role name" })
    @IsString()
    name:string

    @ApiProperty({ example: "Admin role", description: "Role description" })
    @IsString()
    description:string
}
