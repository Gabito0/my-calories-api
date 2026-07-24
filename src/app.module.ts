import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule,  } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/datasource'
import { AuthModule } from './auth/auth.module';
import { ProfilesModule } from './profile/profiles.module';
import { ExerciseDiaryModule } from './exercise-diary/exercise-diary.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    AuthModule,
    ProfilesModule,
    ExerciseDiaryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
