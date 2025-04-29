import { Module } from '@nestjs/common';
import { BlocksModule } from './blocks/blocks.module';
import { TypesModule } from './types/types.module';
import { PropertiesModule } from './properties/properties.module';
import { AuthModule } from './authUser/auth.module';
import { UsersModule } from './users/users.module';
import { AdminsModule } from './admins/admins.module';
import { RolesModule } from './roles/roles.module';
import { AuthAdminModule } from './authAdmin/auth-admin.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './admins/models/admin.model';
import { Block } from './blocks/models/block.model';
import { Property } from './properties/models/property.model';
import { Role } from './roles/models/role.model';
import { Type } from './types/models/type.model';
import { User } from './users/models/user.model';
import { BlockProperty } from './block_properties/models/block_property.model';
import { FileModule } from './file/file.module';
import { CommentsModule } from './comments/comments.module';
import { DevicesModule } from './devices/devices.module';
import { GroupsModule } from './groups/groups.module';
import { PermissionsModule } from './permissions/permissions.module';
import { GroupMembersModule } from './group_members/group_members.module';
import { WorkspaceMemebersModule } from './workspace_memebers/workspace_memebers.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { TeamSpaceModule } from './team_space/team_space.module';
import { TeamSpaceMembersModule } from './team_space_members/team_space_members.module';

@Module({
  imports: [ConfigModule.forRoot({envFilePath:".env", isGlobal:true}),
    SequelizeModule.forRoot({
      dialect:"postgres",
      host:process.env.PG_HOST,
      port:Number(process.env.PG_PORT),
      username:process.env.PG_USER,
      password:process.env.PG_PASSWORD,
      database:process.env.PG_DB,
      models:[Admin, Block, Property, Role, Type, User, BlockProperty],
      autoLoadModels:true,
      sync:{alter:true},
      logging:false
    }),
    BlocksModule, TypesModule, PropertiesModule, AuthModule, UsersModule, AdminsModule, RolesModule, AuthAdminModule, BlockProperty, FileModule, CommentsModule, DevicesModule, GroupsModule, PermissionsModule, GroupMembersModule, WorkspaceMemebersModule, WorkspaceModule, TeamSpaceModule, TeamSpaceMembersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
