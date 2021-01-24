import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { TermService } from './term.service';

import { CreateTermDto } from './dto/create-term.dto';

import { CurrentUser } from '@app/common/decorators/current-user.decorator';

import { JwtAuthGuard } from '@app/auth/guards/jwt-auth.guard';

@ApiTags('term_condition')
@Controller('term_condition')
@UseGuards(JwtAuthGuard)
export class TermController {
  constructor(private readonly termService: TermService) {}

  @Post('')
  createTerm(
    @Body() data: any,
    @CurrentUser() user: any
  ) {
    data['coach'] = user;
    return this.termService.createTerm(
      data,
    );
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
    @CurrentUser() user: any
  ) {
    data['coach'] = user;
    return this.termService.updateTerm(id, data);
  }

  @Get()
  async getTerm(@CurrentUser() user: any) {
    let result = await this.termService.getTerm(user.id);
    return JSON.stringify(result);
  }
}
