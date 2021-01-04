import { Injectable } from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    console.log('username: ' + username);
    console.log('pass: ' + pass);
    const user = await this.userService.findOneByEmail(username);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { user };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
