import { Injectable } from '@nestjs/common';
import { User } from './entity/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ){}
  async findOne(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({email});
  }

  async create(createUserDTO: CreateUserDTO): Promise<User | null>{
    const password_hash = await bcrypt.hash(createUserDTO.password,10)
    const newUser: User = this.usersRepository.create({email:createUserDTO.email,password_hash:password_hash})
    return this.usersRepository.save(newUser);
  }
}
