import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

type ReqBody = {
  username: string;
  password: string;
};

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body: ReqBody) {
    // Gerar token
    this.authService.login(body.username, body.password);
  }
}
