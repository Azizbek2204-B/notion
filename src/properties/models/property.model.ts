import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Block } from "../../blocks/models/block.model";
import { BlockProperty } from "../../block_properties/models/block_property.model";

interface IPropertyCreatorAttr {
  name: string;
  description: string;
}

@Table({ tableName: "property" })
export class Property extends Model<Property, IPropertyCreatorAttr> {
  @ApiProperty({ example: 1, description: "Property ID raqami (unikal)" })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: "Rang", description: "Property nomi" })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({ example: "Elementning rangi", description: "Property tavsifi" })
  @Column({
    type: DataType.STRING,
  })
  description: string;

  @ApiProperty({ type: () => [Block], description: "Propertyga biriktirilgan blocklar" })
  @BelongsToMany(() => Block, () => BlockProperty)
  blocks: Block[];
}
