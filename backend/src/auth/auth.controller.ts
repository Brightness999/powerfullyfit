import {
  Controller,
  Request,
  Post,
  UseGuards,
  createParamDecorator,
  ExecutionContext,
  Session,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from '@app/auth/guards/local-auth.guard';
import { AuthService } from '@app/auth/auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('logout')
  async logout(@Request() req) {
    // await req.session.destroy(function(err) {});
    return req.logOut();
  }
}
