import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkspaceMemebersService } from './workspace_memebers.service';
import { CreateWorkspaceMemeberDto } from './dto/create-workspace_memeber.dto';
import { UpdateWorkspaceMemeberDto } from './dto/update-workspace_memeber.dto';

@Controller('workspace-memebers')
export class WorkspaceMemebersController {
  constructor(private readonly workspaceMemebersService: WorkspaceMemebersService) {}

  @Post()
  create(@Body() createWorkspaceMemeberDto: CreateWorkspaceMemeberDto) {
    return this.workspaceMemebersService.create(createWorkspaceMemeberDto);
  }

  @Get()
  findAll() {
    return this.workspaceMemebersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workspaceMemebersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkspaceMemeberDto: UpdateWorkspaceMemeberDto) {
    return this.workspaceMemebersService.update(+id, updateWorkspaceMemeberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workspaceMemebersService.remove(+id);
  }
}
