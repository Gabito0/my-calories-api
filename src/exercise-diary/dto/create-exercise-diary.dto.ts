import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateExerciseDiaryDTO{
  @Type(()=> Date)
  @IsDate()
  @IsNotEmpty()
  date_entered!: Date;

  @IsString()
  @IsOptional()
  notes!:string;


}