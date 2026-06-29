import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthInputDTO{
  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;

}