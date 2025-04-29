import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { FileService } from '../file/file.service';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userModel: typeof User, private readonly fileService: FileService) {
    
  }

  async create(createUserDto: CreateUserDto, photo:any) {
    const fileName = await this.fileService.savaFile(photo)
    return this.userModel.create({...createUserDto, photo: fileName})
  }

  findAll() {
    return this.userModel.findAll()
  }

  findOne(id: number) {
    return this.userModel.findByPk(id)
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ where: { email } });
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.update(updateUserDto, {where:{id}})
  }

  async remove(id: number) {
    const user = await this.userModel.findByPk(id)
    if (!user) {
      throw new NotFoundException('Foydalanuvchi topilmadi');
    }
    return this.userModel.destroy({where:{id}})
  }
}
