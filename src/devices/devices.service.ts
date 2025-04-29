import { Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Device } from './models/device.model';

@Injectable()
export class DevicesService {
  constructor(@InjectModel(Device) private readonly deviceModel: typeof Device) {
    
  }
  create(createDeviceDto: CreateDeviceDto) {
    return this.deviceModel.create(createDeviceDto);
  }

  findAll() {
    return this.deviceModel.findAll();
  }

  findOne(id: number) {
    return this.deviceModel.findByPk(id);
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return this.deviceModel.update(updateDeviceDto, { where: { id } });
  }

  remove(id: number) {
    return this.deviceModel.destroy({ where: { id } });
  }
}
