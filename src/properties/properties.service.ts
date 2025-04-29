import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Property } from './models/property.model';

@Injectable()
export class PropertiesService {
  constructor(@InjectModel(Property) private readonly propertiesModel:typeof Property) {
    
  }

  create(createPropertyDto: CreatePropertyDto) {
    return this.propertiesModel.create(createPropertyDto)
  }

  findAll() {
    return this.propertiesModel.findAll()
  }

  findOne(id: number) {
    return this.propertiesModel.findByPk(id)
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return this.propertiesModel.update(updatePropertyDto, {where:{id}})
  }

  remove(id: number) {
    return this.propertiesModel.destroy({where:{id}})
  }
}
