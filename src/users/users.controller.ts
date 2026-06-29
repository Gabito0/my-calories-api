import { Body, Controller, Get, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('/me')
  getMe(@Query('email') email: string) {
    return this.usersService.findOne(email);
  }

  @Post()
  create(@Body(ValidationPipe) createUserDTO:CreateUserDTO){
    return this.usersService.create(createUserDTO)
  }
  
}
