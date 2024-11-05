import { IsArray, IsDateString, IsEmail, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import { User } from "src/auth/entities/user.entity";

export class CreateGiftDto {

    @MinLength(3)
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    alt_image: string;

    @IsOptional()
    @IsDateString()
    due_date: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsNumber()
    budget: number;

    @IsOptional()
    @IsNumber()
    balance: number;

    @IsOptional()
    @IsNumber()
    number_participants: number;

    @IsOptional()
    @IsNumber()
    payers: number;

    @IsOptional()
    @IsString()
    bizum: string;

    @IsOptional()
    @IsString()
    account: string;

    @IsOptional()
    @IsArray()
    collaborators: User[];
    
    @IsOptional()
    @IsArray()
    participants: User[];

}
