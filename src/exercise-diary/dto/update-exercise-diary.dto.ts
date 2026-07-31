import { Type } from "class-transformer";
import { IsDate, IsString, IsOptional, IsNotEmpty } from "class-validator";

export class UpdateExerciseDiaryDTO{
  @IsString()
  @IsNotEmpty()
  id!: string

  @Type(()=>Date)
  @IsDate()
  @IsOptional()
  start_time!: Date;

  @Type(()=> Date)
  @IsDate()
  @IsOptional()
  end_time!:Date;

  @IsString()
  @IsOptional()
  notes!:string;
}