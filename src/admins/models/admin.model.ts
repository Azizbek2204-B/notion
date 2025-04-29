import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Role } from "../../roles/models/role.model"

interface IAdminCreationAttr{
    first_name:string
    email:string
    hashed_password:string
    refresh_token?:string
    roleId:bigint
    is_active?:boolean
}

@Table({tableName:"admin"})
export class Admin extends Model<Admin, IAdminCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

    @Column({
        type:DataType.STRING
    })
    first_name:string

    @Column({
        type:DataType.STRING
    })
    email:string

    @Column({
        type:DataType.STRING
    })
    hashed_password:string

    @Column({
        type:DataType.STRING
    })
    refresh_token?:string
    @ForeignKey(()=>Role)
    role:Role[]
    @Column({
        type:DataType.BIGINT
    })
    roleId:bigint
    @BelongsTo(()=>Role)
    roleModel:Role

    @Column({
        type:DataType.STRING
    })
    is_active?:boolean
}
