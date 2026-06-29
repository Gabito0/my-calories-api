import { Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entity/profiles.entity';
import { Repository } from 'typeorm';
import { SetupProfileDTO } from './dto/setup-profile.dto';

@Injectable()
export class ProfilesService {

  constructor(
    @InjectRepository(Profile)  
    private readonly profilesRepository:
    Repository<Profile>,
  ){}
  async create(id:string, setupProfileDTO:SetupProfileDTO):Promise<Profile | null>{
    const newProfile = this.profilesRepository.create({user_id:id});
    this.profilesRepository.merge(newProfile,setupProfileDTO)
    return await this.profilesRepository.save(newProfile);
  } 

}
