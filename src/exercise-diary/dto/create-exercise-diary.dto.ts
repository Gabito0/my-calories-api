import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateExerciseDiaryDTO{
  @Type(()=> Date)
  @IsDate()
  @IsNotEmpty()
  start_time!: Date;

  @Type(()=> Date)
  @IsDate()
  @IsNotEmpty()
  end_time!:Date;

  @IsString()
  @IsOptional()
  notes!:string;


}