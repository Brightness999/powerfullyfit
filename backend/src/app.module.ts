import { Module } from '@nestjs/common';

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
    TypeOrmModule.forRoot({
      // type: 'postgres', // type of our database
      // host: 'localhost', // database host
      // port: 5432, // database host
      // username: 'postgres', // username
      // password: 'pass123', // user password
      // database: 'postgres', // name of our database,
      // autoLoadEntities: true, // models will be loaded automatically (you don't have to explicitly specify the entities: [] array)
      // synchronize: true, // your entities will be synced with the database (ORM will map entity definitions to corresponding SQL tabled), every time you run the application (recommended: disable in the production)
      type: 'postgres',
      url: 'postgres://user:password@postgres:5432/db',
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
