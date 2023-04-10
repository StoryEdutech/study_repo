import { Controller, Get, Req, Post, HttpCode, Body, Param } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

// Nextjsみたいにディレクトリ名をパスにすると分かりやすそう
@Controller('cats')
export class CatsController {
    // constructorで実際にserviceをcontrollerに注入する
    constructor(private catsService: CatsService){}

    @Post()
    async create(@Body() createCatDto: CreateCatDto): Promise<void>{
        this.catsService.create(createCatDto)
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }

    // @Post()
    // create(@Body() createCatDto: CreateCatDto): string {
    //     console.log(createCatDto.name)
    //     return `猫の名前は${createCatDto.name}です`;
    // }

    // @Get()
    // findAll(@Req() req: Request):string {
    //     console.log(req)
    //     return 'This action returns all cats method:get';
    // }

    // // 動的URLとそのパラメータの取得
    // @Get(':id')
    // findOne(@Param('id') id: string) {
    // return `This action returns a #${id} cat`;
    // }
}

