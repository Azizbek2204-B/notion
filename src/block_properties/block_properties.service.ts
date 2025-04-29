import { Injectable } from '@nestjs/common';
import { CreateBlockPropertyDto } from './dto/create-block_property.dto';
import { UpdateBlockPropertyDto } from './dto/update-block_property.dto';

@Injectable()
export class BlockPropertiesService {
  create(createBlockPropertyDto: CreateBlockPropertyDto) {
    return 'This action adds a new blockProperty';
  }

  findAll() {
    return `This action returns all blockProperties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blockProperty`;
  }

  update(id: number, updateBlockPropertyDto: UpdateBlockPropertyDto) {
    return `This action updates a #${id} blockProperty`;
  }

  remove(id: number) {
    return `This action removes a #${id} blockProperty`;
  }
}
