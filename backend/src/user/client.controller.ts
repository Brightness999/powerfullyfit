import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { ClientService } from './client.service';

import { CreateClientDto } from './dto/create-client.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
@ApiTags('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('')
  createClient(@Body() createClientDto: CreateClientDto) {
    console.log(createClientDto);
    return this.clientService.createClient(createClientDto);
  }

  @Get('')
  findAllClient() {
    return this.clientService.findAllClients();
  }

  @Get('not-assigned')
  findAllNotAssignedClient() {
    return this.clientService.findAllNotAssignedClient();
  }

  @Get(':id')
  findOneClient(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.findOneClient(id);
  }

  @Patch(':id')
  updateClient(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientService.updateClient(id, updateClientDto);
  }

  @Delete(':id')
  removeClient(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.removeClient(id);
  }

  @Post('invite')
  inviteClient(@Body() email: string) {
    console.log(email);
    // return this.clientService.inviteClient(email);
  }
}
