import { Injectable } from '@nestjs/common';
import { CreateWorkspaceMemeberDto } from './dto/create-workspace_memeber.dto';
import { UpdateWorkspaceMemeberDto } from './dto/update-workspace_memeber.dto';

@Injectable()
export class WorkspaceMemebersService {
  create(createWorkspaceMemeberDto: CreateWorkspaceMemeberDto) {
    return 'This action adds a new workspaceMemeber';
  }

  findAll() {
    return `This action returns all workspaceMemebers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workspaceMemeber`;
  }

  update(id: number, updateWorkspaceMemeberDto: UpdateWorkspaceMemeberDto) {
    return `This action updates a #${id} workspaceMemeber`;
  }

  remove(id: number) {
    return `This action removes a #${id} workspaceMemeber`;
  }
}
