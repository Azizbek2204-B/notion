import { PartialType } from '@nestjs/swagger';
import { CreateWorkspaceMemeberDto } from './create-workspace_memeber.dto';

export class UpdateWorkspaceMemeberDto extends PartialType(CreateWorkspaceMemeberDto) {}
