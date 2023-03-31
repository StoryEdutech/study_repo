import { Controller, Get, Req, Post, HttpCode, Redirect, Param, Body} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  // @Post()
  // @HttpCode(204)
  // create(@Req() request: Request): string {
  //   return 'This action adds a new cat';
  // }
  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   return 'This action adds a new cat';
  // }
  // @Get()
  // findAll(@Req() request: Request): string {
  //   return 'This action returns all cats';
  // }
  constructor(private catsService: CatsService) {}

   @Post()
   async create(@Body() createCatDto: CreateCatDto) {
     this.catsService.create(createCatDto);
   }

   @Get()
   async findAll(): Promise<Cat[]> {
     return this.catsService.findAll();
   }

  @Get("Nest")
  @Redirect('https://nestjs.com', 301)
  redirectToNest(){}

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `This action returns a #${id} cat`;
  }

}
