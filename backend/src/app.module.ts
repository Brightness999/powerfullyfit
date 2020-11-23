import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationModule } from './organization/organization.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [OrganizationModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
