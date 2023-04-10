import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // create should be handled in AuthController
  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // password should only be changed in /auth/change_pw
    const {password,...other}=updateUserDto;
    if(Object.keys(other).length==0 && password){
      throw new BadRequestException("password_change_on_/auth/change_pw")
    }
    return this.usersService.update(+id, other);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
