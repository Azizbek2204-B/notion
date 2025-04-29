import { Module } from '@nestjs/common';
import { WorkspaceMemebersService } from './workspace_memebers.service';
import { WorkspaceMemebersController } from './workspace_memebers.controller';

@Module({
  controllers: [WorkspaceMemebersController],
  providers: [WorkspaceMemebersService],
})
export class WorkspaceMemebersModule {}
