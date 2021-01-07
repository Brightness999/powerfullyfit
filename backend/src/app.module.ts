import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// ----------- modules -------------
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { ProgramModule } from './program/program.module';
import { OrganizationModule } from './organization/organization.module';
import { WorkoutModule } from './workout/workout.module';
import { ExerciseModule } from './exercise/exercise.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      host: 'localhost', // database host
      port: 5432, // database host
      username: 'user', // username
      password: 'password', // user password
      database: 'postgres', // name of our database,
      type: 'postgres',
      // url: 'postgres://user:password@postgres:5432/db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
    AuthModule,
    UserModule,
    OrganizationModule,
    ProgramModule,
    WorkoutModule,
    ExerciseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
