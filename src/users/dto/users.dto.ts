import {IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string | undefined;

    @ApiProperty( { required: false })
    @IsNumber()
    @IsOptional()
    age: number | undefined;

    @ApiProperty( { required: true, example: 'user@mail.com'})
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string | undefined;

    @ApiProperty()
    @IsString()
    city: string | undefined;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    status: boolean | undefined;
}
