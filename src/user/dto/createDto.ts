import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class createUser {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'MANAGER'], {
    message: 'Role must be one of the following: INTERN, ENGINEER, MANAGER'})
  role: string;
}