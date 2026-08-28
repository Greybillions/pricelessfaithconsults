import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name!: string;

  @IsEmail()
  @MaxLength(255)
  email!: string;

  @IsString()
  @IsOptional()
  @MaxLength(150)
  organisation?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  enquiry!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(5000)
  message!: string;
}
