import { IsEmail, IsEnum, IsNumber, IsString } from "class-validator";

export class user {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'MANAGER'])
  role: string;
}