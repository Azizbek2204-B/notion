import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface ICommentCreateAttr {
  content: string;
  user_id: number;
  block_id: number;
  is_edited: boolean;
}

@Table({ tableName: "comments" })
export class Comment extends Model<Comment, ICommentCreateAttr> {
  @ApiProperty({ example: 1, description: "Comment ID" })
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ApiProperty({ example: "Bu juda yaxshi!", description: "Comment mazmuni" })
  @Column({ type: DataType.TEXT })
  content: string;

  @ApiProperty({ example: 1, description: "Comment yozgan user IDsi" })
  @Column({ type: DataType.BIGINT })
  user_id: number;

  @ApiProperty({ example: 5, description: "Qaysi block uchun comment" })
  @Column({ type: DataType.BIGINT })
  block_id: number;

  @ApiProperty({ example: false, description: "Comment tahrirlanganmi yoki yo'qmi" })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  is_edited: boolean;
}
