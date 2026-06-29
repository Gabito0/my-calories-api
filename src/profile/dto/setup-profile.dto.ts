import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, IsUUID } from "class-validator";
import { Gender } from "../enum/gender.enum";
import { Type } from "class-transformer";

export class SetupProfileDTO{
  @IsString()
  @IsNotEmpty()
  first_name! : string;

  @IsString()
  @IsNotEmpty()
  last_name!: string;

  @IsDate()
  @IsNotEmpty()
  @Type(()=>Date)
  birth_date!: Date;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender!: Gender;

  @IsNumber()
  @IsNotEmpty()
  height_cm!: number;

}