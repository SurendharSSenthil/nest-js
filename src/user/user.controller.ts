import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { createUser } from './dto/createDto';
import { updateUser } from './dto/updateDto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll(@Query('role', ValidationPipe) role?: 'INTERN' | 'ENGINEER' | 'MANAGER') {
    return this.userService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body(ValidationPipe) body: createUser): any {
    return this.userService.create(body);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id:number, @Body(ValidationPipe) body:  updateUser): any {
    return this.userService.update(body, id);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number){
    return this.userService.delete(id);
  }
}
