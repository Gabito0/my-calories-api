import { Type } from "class-transformer";
import { IsDate, IsString, IsOptional, IsNotEmpty } from "class-validator";

export class UpdateExerciseDiaryDTO{

  @Type(()=>Date)
  @IsDate()
  @IsOptional()
  date_entered!: Date;

  @IsString()
  @IsOptional()
  notes!:string;
}