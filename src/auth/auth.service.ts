import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'


type AuthInput = {email: string; password: string};
type SignInData = {id: string, email: string;};
type AuthResult = {accessToken: string, id: string, email: string;};

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  /**
   * Authenticates the user and returns 
   */
  async authenticate(input: AuthInput): Promise<AuthResult>{
    const user = await this.validateUser(input);

    if(!user){
      throw new UnauthorizedException();
    };

    return this.signIn(user)
  }
  
  async register(input: AuthInput): Promise<AuthResult>{
    const newUser = await this.usersService.create(input);
    if(!newUser){
      throw new BadRequestException();
    }

    return this.signIn({id: newUser.id, email: newUser.email});
  }

  async validateUser(input:AuthInput): Promise<SignInData | null>{
    const user = await this.usersService.findOne(input.email)
    if(user){
      const isValid = await bcrypt.compare(input.password, user.password_hash)
      if(isValid){
        return {
          id: user.id,
          email: user.email
        }
      }
    }
    return null;
  }

  async signIn (user: SignInData): Promise <AuthResult>{
    const tokenPayload = {
      sub: user.id,
      email: user.email
    };

    const accessToken = await this.jwtService.signAsync(tokenPayload);

    return { accessToken, id:user.id, email: user.email}
  }
}
