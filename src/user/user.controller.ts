import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'MANAGER') {
    return this.userService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() body: {
    name: string;
    email: string;
    role: string;
  }): any {
    return this.userService.create(body);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id:number, @Body() body:  {email?: string, role?: string}): any {
    return this.userService.update(body, id);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number){
    return this.userService.delete(id);
  }
}
