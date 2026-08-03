import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule,  } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/datasource'
import { AuthModule } from './auth/auth.module';
import { ProfilesModule } from './profiles/profiles.module';
import { ExerciseDiariesModule } from './exercise-diaries/exercise-diaries.module';
import { ExerciseLogsModule } from './exercise-logs/exercise-logs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    AuthModule,
    ProfilesModule,
    ExerciseDiariesModule,
    ExerciseLogsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
