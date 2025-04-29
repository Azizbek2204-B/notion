import { Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './models/role.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private readonly roleModel: typeof Role) {
    
  }
  create(createRoleDto: CreateRoleDto) {
    return this.roleModel.create(createRoleDto);
  }

  findAll() {
    return this.roleModel.findAll();
  }

  findOne(id: number) {
    return this.roleModel.findOne({ where: { id } });
  }

  findByName(name: string) {
    return this.roleModel.findOne({ where: { name } });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleModel.update(updateRoleDto, { where: { id } });
  }

  remove(id: number) {
    return this.roleModel.destroy({ where: { id } });
  }
}
