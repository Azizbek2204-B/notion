import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAdminDto } from '../admins/dto/create-admin.dto';
import { SignInDto } from './dto/sign-in.dto';
import * as bcrypt from "bcrypt"
import { Admin } from '../admins/models/admin.model';
import { AdminsService } from '../admins/admins.service';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class AuthAdminService {
    constructor(private readonly adminService:AdminsService, private readonly jwtService:JwtService,private readonly roleModel:RolesService) {
        
    }

    async signUp (createAdminDto:CreateAdminDto){
        const condidate = await this.adminService.findByEmail(createAdminDto.email)
        if (condidate) {
            throw new BadRequestException("Bunday emailli foydalanuvchi mavjud")
        }
        const hashedPassword = await bcrypt.hash(createAdminDto.hashed_password, 7)
        createAdminDto.hashed_password = hashedPassword
        const newAdmin = await this.adminService.create(createAdminDto)

        return newAdmin
    }

    private async generateToken(admin:Admin, role:any){
        const payload = { email:admin.dataValues.email, password:admin.dataValues.hashed_password,roles:[role.dataValues.name], is_active:admin.is_active}
        return {token:this.jwtService.sign(payload)}
    }

    async signIn(signInDto:SignInDto){
        const admin = await this.adminService.findByEmail(signInDto.email)
        console.log(admin);
        const role = await this.roleModel.findByName(signInDto.roles[0])
        if (!role) {
            throw new BadRequestException("Bunday rol mavjud emas")
        }
        if (!admin) {
            throw new UnauthorizedException("Email yoki password noto'g'ri1")
        }

        const validPassword = await bcrypt.compare(signInDto.hashed_password, admin.dataValues.hashed_password)
        if (!validPassword) {
            throw new UnauthorizedException("Email yoki password noto'g'ri2")
        }
        admin.is_active = true
        await admin.save()
        const token = await this.generateToken(admin, role)
        return token
    }
}
