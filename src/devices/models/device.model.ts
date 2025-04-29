import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface IDeviceCreateAttr {
  user_id: number;
  name: string;
  last_active: Date;
  location: string;
  information: object;
}

@Table({ tableName: "devices" })
export class Device extends Model<Device, IDeviceCreateAttr> {
  @ApiProperty({ example: 1, description: "Device ID" })
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ApiProperty({ example: 1, description: "User ID" })
  @Column({ type: DataType.BIGINT })
  user_id: number;

  @ApiProperty({ example: "iPhone 14 Pro", description: "Device nomi" })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({ example: "2025-04-25T10:30:00Z", description: "Oxirgi aktivlik vaqti" })
  @Column({ type: DataType.DATE })
  last_active: Date;

  @ApiProperty({ example: "Toshkent, Uzbekistan", description: "Device joylashuvi" })
  @Column({ type: DataType.STRING })
  location: string;

  @ApiProperty({ example: { os: "iOS", version: "17.1" }, description: "Qo'shimcha device ma'lumotlari" })
  @Column({ type: DataType.JSONB })
  information: object;
}
