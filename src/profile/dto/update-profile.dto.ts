import { IsOptional, IsString, IsDate, IsEnum, IsNumber } from "class-validator";
import { Gender } from "../enum/gender.enum";
import { Type } from "class-transformer";
export class UpdateProfileDTO{
  @IsString()
  @IsOptional()
  first_name! : string;

  @IsString()
  @IsOptional()
  last_name!: string;

  @IsDate()
  @IsOptional()
  @Type(()=>Date)
  birth_date!: Date;

  @IsEnum(Gender)
  @IsOptional()
  gender!: Gender;

  @IsNumber()
  @IsOptional()
  height_cm!: number;

}