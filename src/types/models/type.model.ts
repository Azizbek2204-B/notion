import { HasMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Block } from "../../blocks/models/block.model";
import { ApiProperty } from "@nestjs/swagger";

interface ITypeCreatorAttr {
  name: string;
  description: string;
}

@Table({ tableName: "type" })
export class Type extends Model<Type, ITypeCreatorAttr> {
  @ApiProperty({ example: 1, description: 'Unikal ID raqam' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: 'Residential', description: 'Turi nomi' })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({ example: 'Uy-joy uchun mo‘ljallangan', description: 'Turi haqida tavsif' })
  @Column({
    type: DataType.STRING,
  })
  description: string;

  @ApiProperty({ type: () => [Block], description: 'Ushbu turga tegishli bloklar' })
  @HasMany(() => Block)
  blocks: Block[];
}
