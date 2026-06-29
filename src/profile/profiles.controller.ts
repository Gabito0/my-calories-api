import { Body, Controller, Param, Put, UseGuards, Request, Post } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { SetupProfileDTO } from './dto/setup-profile.dto';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService){}

  @Post()
  createUserProfile(@Request() req, @Body() setupProfileDto: SetupProfileDTO){
    return this.profilesService.create(req.user.userId,setupProfileDto);
  }
}
