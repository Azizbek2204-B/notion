import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import * as bcrypt from "bcrypt";
import { UsersService } from "../users/users.service";
import { User } from "../users/models/user.model";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/sign-in.dto";
import { FileService } from "../file/file.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly fileService: FileService
  ) {}
  async signUp(createUserDto: CreateUserDto, photo:any) {
    const condidate = await this.userService.findByEmail(createUserDto.email);
    if (condidate) {
      throw new BadRequestException("Bunday emailli foydalanuvchi mavjud");
    }
    const hashedPassword = await bcrypt.hash(createUserDto.hashed_password, 7);
    createUserDto.hashed_password = hashedPassword;
    const fileName = await this.fileService.savaFile(photo);
    const newUser = await this.userService.create(createUserDto, fileName);
    return newUser;
  }

  private async generateToken(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
      hashed_password: user.hashed_password,
    };
    return { token: this.jwtService.sign(payload) };
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findByEmail(signInDto.email);
    if (!user) {
      throw new UnauthorizedException("Email yoki password noto'g'ri1");
    }
    const validPassword = await bcrypt.compare(
      signInDto.hashed_password,
      user.hashed_password
    );
    if (!validPassword) {
      throw new UnauthorizedException("Email yoki password noto'g'ri2");
    }
    return this.generateToken(user);
  }
}
