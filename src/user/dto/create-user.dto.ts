// import {  } from 'class-validator';

import { IsBoolean, IsEmail, IsString } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsBoolean()
  isUserAdmin: boolean;

  @IsString()
  stripe_costumer_id: string;
}