import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "../../types/models/type.model";

interface IBlockCreatorAttr {
  typeId: number;
  created_by: number;
  parent: number;
  order_index: number;
}

@Table({ tableName: "block" })
export class Block extends Model<Block, IBlockCreatorAttr> {
  @ApiProperty({ example: 1, description: "Block ID raqami (unikal)" })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: 2, description: "Block yaratuvchi user ID" })
  @Column({ type: DataType.INTEGER })
  created_by: number;

  @ApiProperty({ example: 0, description: "Ota block ID (yoki 0 agar mavjud bo'lmasa)" })
  @Column({ type: DataType.INTEGER })
  parent: number;

  @ApiProperty({ example: 1, description: "Tartib raqami" })
  @Column({ type: DataType.INTEGER })
  order_index: number;

  @ApiProperty({ example: 3, description: "Block turining IDsi" })
  @ForeignKey(() => Type)
  @Column({ type: DataType.INTEGER })
  typeId: number;

  @ApiProperty({ type: () => Type, description: "Blockning turi" })
  @BelongsTo(() => Type)
  type: Type;
}
