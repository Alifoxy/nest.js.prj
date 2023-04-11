import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateCatDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string | undefined;

    @ApiProperty( { required: false })
    @IsNumber()
    @IsOptional()
    age: number | undefined;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    owner: string | undefined;
}