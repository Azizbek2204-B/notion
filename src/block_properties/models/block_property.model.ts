import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Block } from "../../blocks/models/block.model";
import { Property } from "../../properties/models/property.model";

interface IBlokPropertyCreationAttr {
  blockId: number;
  propertiesId: number;
  value: string;
}

@Table({ tableName: "block_property" })
export class BlockProperty extends Model<BlockProperty, IBlokPropertyCreationAttr> {
  @ApiProperty({ example: 1, description: "Block ID" })
  @ForeignKey(() => Block)
  @Column({
    type: DataType.INTEGER,
  })
  blockId: number;

  @ApiProperty({ type: () => Block, description: "Tegishli Block obyekt" })
  @BelongsTo(() => Block)
  block: Block;

  @ApiProperty({ example: 2, description: "Property ID" })
  @ForeignKey(() => Property)
  @Column({
    type: DataType.INTEGER,
  })
  propertiesId: number;

  @ApiProperty({ type: () => Property, description: "Tegishli Property obyekt" })
  @BelongsTo(() => Property)
  property: Property;

  @ApiProperty({ example: "qizil", description: "Property qiymati" })
  @Column({
    type: DataType.STRING,
  })
  value: string;
}
