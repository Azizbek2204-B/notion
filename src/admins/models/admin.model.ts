import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Role } from "../../roles/models/role.model";

interface IAdminCreationAttr {
  first_name: string;
  email: string;
  hashed_password: string;
  refresh_token?: string;
  roleId: number;
  is_active?: boolean;
}

@Table({ tableName: "admin" })
export class Admin extends Model<Admin, IAdminCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({ type: DataType.STRING })
  declare first_name: string;

  @Column({ type: DataType.STRING })
  declare email: string;

  @Column({ type: DataType.STRING })
  declare hashed_password: string;

  @Column({ type: DataType.STRING })
  declare refresh_token?: string;

  @ForeignKey(() => Role)
  @Column({ type: DataType.BIGINT })
  declare roleId: number;

  @BelongsTo(() => Role)
  declare roleModel: Role;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  declare is_active: boolean;
}
