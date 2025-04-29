import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Admin } from "../../admins/models/admin.model";

interface IRoleCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "role" })
export class Role extends Model<Role, IRoleCreationAttr> {
  @ApiProperty({ example: 1, description: "Rol ID raqami (unikal)" })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: "admin", description: "Rol nomi (masalan: admin, user, manager...)" })
  @Column({
    type: DataType.STRING,
  })
  declare name: string; // ✅ `declare` bilan ishlatish mumkin, lekin `public` field yo'q!

  @ApiProperty({ example: "Katta lavozim", description: "Rol tavsifi" })
  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @ApiProperty({ type: () => [Admin], description: "Ushbu rolga tegishli adminlar ro'yxati" })
  @HasMany(() => Admin)
  declare admin: Admin[]; // ✅ ko‘plik bo‘lishi kerak (`Admin[]`)
}
