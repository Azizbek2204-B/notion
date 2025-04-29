import { Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Block } from './models/block.model';

@Injectable()
export class BlocksService {
  constructor(@InjectModel(Block) private readonly roleModel:typeof Block) {
    
  }
  create(createBlockDto: CreateBlockDto) {
    return this.roleModel.create(createBlockDto)
  }

  findAll() {
    return this.roleModel.findAll()
  }

  findOne(id: number) {
    return this.roleModel.findByPk(id)
  }

  update(id: number, updateBlockDto: UpdateBlockDto) {
    return this.roleModel.update(updateBlockDto, {where:{id}})
  }

  remove(id: number) {
    return this.roleModel.destroy({where:{id}})
  }
}
