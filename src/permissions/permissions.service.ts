import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Permission } from './models/permission.model';

@Injectable()
export class PermissionsService {
  constructor(@InjectModel(Permission) private readonly permissionModel: typeof Permission) {
    
  }
  create(createPermissionDto: CreatePermissionDto) {
    return this.permissionModel.create(createPermissionDto);
  }

  findAll() {
    return this.permissionModel.findAll();
  }

  findOne(id: number) {
    return  this.permissionModel.findByPk(id);
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return this.permissionModel.update(updatePermissionDto, { where: { id } });
  }

  remove(id: number) {
    return this.permissionModel.destroy({ where: { id } });
  }
}
