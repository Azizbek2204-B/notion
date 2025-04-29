import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface IGroupCreateAttr {
  name: string;
  icon: string;
  description: string;
  created_by: number;
}

@Table({ tableName: "groups" })
export class Group extends Model<Group, IGroupCreateAttr> {
  @ApiProperty({ example: 1, description: "Group ID" })
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ApiProperty({ example: "Frontend Developers", description: "Group nomi" })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({ example: "group-icon.png", description: "Group icon nomi" })
  @Column({ type: DataType.STRING })
  icon: string;

  @ApiProperty({ example: "Frontend dasturchilar guruhi", description: "Group tavsifi" })
  @Column({ type: DataType.TEXT })
  description: string;

  @ApiProperty({ example: 1, description: "Group yaratgan user IDsi" })
  @Column({ type: DataType.BIGINT })
  created_by: number;
}