import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import {config} from "dotenv"
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './stratagies/local.strategy';
import { JwtStrategy } from './stratagies/jwt.strategy';
config();
@Module({
    controllers: [ AuthController],
  providers: [AuthService, {provide:APP_GUARD, useClass:AuthGuard}, LocalStrategy, JwtStrategy],
  imports: [UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: "1d"}
    }),
    PassportModule
  ]
})
export class AuthModule {}
