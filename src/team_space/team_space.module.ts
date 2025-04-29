import { Module } from '@nestjs/common';
import { TeamSpaceService } from './team_space.service';
import { TeamSpaceController } from './team_space.controller';

@Module({
  controllers: [TeamSpaceController],
  providers: [TeamSpaceService],
})
export class TeamSpaceModule {}
