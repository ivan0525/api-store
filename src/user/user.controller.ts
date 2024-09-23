import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }
  @Post('create')
  create(@Body() userData: { name?: string; email: string }): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }

  @Put('publish/:id')
  async publishPost(@Param('id') id: string, @Body() userData: { name?: string; email: string }): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: userData,
    });
  }

  @Get('queryPage')
  async queryPage(@Query('id') id: string): Promise<UserModel[]> {
    console.log(id)
    return this.userService.queryPage({ where: { id: Number(id) } })
  }
}
