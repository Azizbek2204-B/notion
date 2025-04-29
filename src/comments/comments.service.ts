import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './models/comment.model';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment) private readonly commentModel:typeof Comment) {
    
  }
  create(createCommentDto: CreateCommentDto) {
    return this.commentModel.create(createCommentDto)
  }

  findAll() {
    return this.commentModel.findAll()
  }

  findOne(id: number) {
    return this.commentModel.findByPk(id)
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.commentModel.update(updateCommentDto, {where:{id}})
  }

  remove(id: number) {
    return this.commentModel.destroy({where:{id}})
  }
}
