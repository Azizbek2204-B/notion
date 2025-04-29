import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface IPermissionCreateAttr {
  name: string;
  label: string;
  description: string;
}

@Table({ tableName: "permissions" })
export class Permission extends Model<Permission, IPermissionCreateAttr> {
  @ApiProperty({ example: 1, description: "Permission ID" })
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ApiProperty({ example: "edit_user", description: "Permission nomi" })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({
    example: "Foydalanuvchini tahrirlash",
    description: "Permission label",
  })
  @Column({ type: DataType.STRING })
  label: string;

  @ApiProperty({
    example: "Foydalanuvchi malumotlarini o'zgartirish uchun ruxsat",
    description: "Permission tavsifi",
  })
  @Column({ type: DataType.TEXT })
  description: string;
}
