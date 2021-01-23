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
  UseGuards,
} from '@nestjs/common';

import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';

import { CurrentUser } from '@app/common/decorators/current-user.decorator';
// import { JwtAuthGuard } from '@app/auth/guards/jwt-auth.guard';

import { ApiTags } from '@nestjs/swagger';

import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('message')
@ApiTags('message')
// @UseGuards(JwtAuthGuard)
export class MessageController {
  constructor(
    private readonly messageService: MessageService,
    private readonly messageGateway: MessageGateway,
  ) {}

  // @Post()
  // create(@Body() createMessageDto: CreateMessageDto, @CurrentUser() user: any) {
  //   console.log('user');
  //   console.log(user);

  //   createMessageDto['from'] = user;

  //   this.messageGateway.create(createMessageDto);

  //   return this.messageService.create(createMessageDto);
  // }

  // @Get()
  // findAll() {
  //   return this.messageService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id: number) {
  //   return this.messageService.findOne(id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateMessageDto: UpdateMessageDto,
  // ) {
  //   return this.messageService.update(id, updateMessageDto);
  // }

  // @Delete(':id')
  // remove(@Param('id', ParseIntPipe) id: number) {
  //   return this.messageService.remove(id);
  // }
}
