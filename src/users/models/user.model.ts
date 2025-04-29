import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface IUserCreationAttr {
  first_name: string;
  last_name?: string;
  email: string;
  hashed_password: string;
  refresh_token?: string;
  photo?: string;
  activation_link?: string;
}

@Table({ tableName: "user" })
export class User extends Model<User, IUserCreationAttr> {
  @ApiProperty({ example: 1, description: 'Foydalanuvchining unikal ID raqami' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: 'Azizbek', description: 'Foydalanuvchining ismi' })
  @Column({
    type: DataType.STRING,
  })
  declare first_name: string;

  @ApiProperty({ example: 'Abdullayev', description: 'Foydalanuvchining familiyasi', required: false })
  @Column({
    type: DataType.STRING,
  })
  declare last_name?: string;

  @ApiProperty({ example: 'azizbek1@gmail.com', description: 'Foydalanuvchining elektron pochtasi' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare email: string;

  @ApiProperty({ example: '$2b$07$...', description: 'Xeshlangan parol (bazada saqlanadi)' })
  @Column({
    type: DataType.STRING,
  })
  declare hashed_password: string;

  @ApiProperty({ example: 'https://example.com/photo.jpg', description: 'Foydalanuvchi rasmi URL', required: false })
  @Column({
    type: DataType.STRING,
  })
  declare photo?: string;

  @ApiProperty({ example: 'some-refresh-token', description: 'Yangi token olish uchun refresh token', required: false })
  @Column({
    type: DataType.STRING,
  })
  declare refresh_token?: string;

  @ApiProperty({ example: 'some-activation-link', description: 'Email aktivatsiya havolasi', required: false })
  @Column({
    type: DataType.STRING,
  })
  declare activation_link?: string;
}