import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// ----------- modules -------------
import { TypeOrmModule } from '@nestjs/typeorm';

import { MulterModule } from '@nestjs/platform-express';

import { UserModule } from './user/user.module';
import { ProgramModule } from './program/program.module';
import { OrganizationModule } from './organization/organization.module';
import { WorkoutModule } from './workout/workout.module';
import { ExerciseModule } from './exercise/exercise.module';
import { AuthModule } from './auth/auth.module';
import { MessageModule } from './message/message.module';
import { NotificationModule } from './notification/notification.module';
import { ExternalAssetModule } from './external-asset/external-asset.module';
import { InvitationModule } from './invitation/invitation.module';
import { CalendarEventModule } from './calendar-event/calendar-event.module';
import { TermModule } from './term-condition/term.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        // url: 'postgres://user:password@postgres:5432/db',
        url: 'postgres://user:password@localhost:5432/db',
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
    MulterModule.register({
      dest: './upload',
    }),
    AuthModule,
    UserModule,
    OrganizationModule,
    ProgramModule,
    WorkoutModule,
    ExerciseModule,
    MessageModule,
    NotificationModule,
    ExternalAssetModule,
    InvitationModule,
    CalendarEventModule,
    TermModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
