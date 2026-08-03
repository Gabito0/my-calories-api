import { Body, Controller, Param, Put, UseGuards, Request, Post, Get, Patch } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { SetupProfileDTO } from './dto/setup-profile.dto';
import { UpdateProfileDTO } from './dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService){}

  @Post()
  createUserProfile(@Request() req, @Body() setupProfileDTO: SetupProfileDTO){
    return this.profilesService.create(req.user.userId,setupProfileDTO);
  }
   

  @Get()
  getUserProfile(@Request() req){
    return this.profilesService.getProfile(req.user.user_id)
  }

  @Patch()
  UpdateUserProfile(@Request() req, @Body() updateProfileDTO: UpdateProfileDTO){
    return this.profilesService.updateProfile(req.user.user_id,updateProfileDTO)
  }
} 
