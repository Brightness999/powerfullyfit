import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { InvitationService } from './invitation.service';

import { CreateInvitationDto } from './dto/create-invitation.dto';
import { CreateClientInvitationDto } from './dto/create-client-invitation.dto';
import { CreateCoachInvitationDto } from './dto/create-coach-invitation.dto';

import { UpdateInvitationDto } from './dto/update-invitation.dto';

@ApiTags('invitation')
@Controller('invitation')
export class InvitationController {
  constructor(private readonly invitationService: InvitationService) {}

  @Post('client')
  createClientInvitation(
    @Body() createClientInvitationDto: CreateClientInvitationDto,
  ) {
    return this.invitationService.createClientInvitation(
      createClientInvitationDto,
    );
  }

  @Post('coach')
  createCoachInvitation(@Body() createInvitationDto: CreateCoachInvitationDto) {
    return this.invitationService.createCoachInvitation(createInvitationDto);
  }

  @Post('client/:id/accept')
  acceptClientInvitation(
    @Param('id') id: number,
    @Body() payload: { password: string },
  ) {
    return this.invitationService.acceptClientInvitation(id, payload.password);
  }

  @Post('coach/:id/accept')
  acceptCoachInvitation(
    @Param('id') id: number,
    @Body() payload: { password: string },
  ) {
    return this.invitationService.acceptCoachInvitation(id, payload.password);
  }

  @Get()
  findAll() {
    return this.invitationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invitationService.findOne(+id);
  }

  @Get('coach-invitation/:id')
  findCoachOne(@Param('id') id: string) {
    return this.invitationService.findOne(+id);
  }

  @Get('client-invitation/:id')
  findClientOne(@Param('id') id: string) {
    return this.invitationService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateInvitationDto: UpdateInvitationDto,
  ) {
    return this.invitationService.update(+id, updateInvitationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invitationService.remove(+id);
  }
}
