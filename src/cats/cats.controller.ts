import {Controller, Get, Post, Param, Req, Res, Patch, Delete, HttpStatus, Body} from '@nestjs/common';
import {ApiTags, ApiParam} from "@nestjs/swagger";
import {CatService} from "./cats.service";
import {CreateCatDto} from "./dto/cats.dto";

@ApiTags('Cats')
@Controller('cats')

export class CatsController {
    constructor(
        private readonly catService: CatService,
    ) {
    }

    @Get()
    async getCatsList() {}


    @Get('/:catId')
    async getCat(
        @Req() req: any,
        @Res() res: any,
        @Param('catId') catId: string
    ) {
        console.log(catId);
        return res.status(HttpStatus.FOUND).json(await this.catService.getCat(catId))
    }

    @Post()
    async createCat(
        @Req() req: any,
        @Body() body: CreateCatDto,
        @Res() res: any,
    ) {
        return res.status(HttpStatus.CREATED).json(await this.catService.createCat(body));
    }

    @Delete('/:catId')
    async deleteCat(
        @Req() req: any,
        @Res() res: any,
        @Param('catId') catId: string,
    ) {
        console.log(catId);
        return res.status(HttpStatus.OK).json(await this.catService.deleteCat(catId))
    }

    @ApiParam({ name: 'id', required: true })
    @Patch('/:catId')
    async updateCat(
        @Req() req: any,
        @Res() res: any,
        @Body() body: CreateCatDto,
        @Param('catId') catId: any,
    ){

        console.log(catId);
        return res.status(HttpStatus.ACCEPTED).json(await this.catService.patch(catId,body))

    }


}