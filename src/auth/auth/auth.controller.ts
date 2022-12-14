import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Role } from '../role/role.decorator';
import { RoleGuard } from '../role/role.guard';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

type ReqBody = {
  username: string;
  password: string;
};

// @UseGuards(JwtGuard) // Para bloquear o controller inteiro
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body: ReqBody) {
    // Gerar token
    const token = this.authService.login(body.username, body.password);

    return { token };
  }

  @Role('admin')
  @UseGuards(JwtGuard, RoleGuard) // primeiro autenticar (JWT), depoise autorizar (RoleGuard)
  @Get('test-auth')
  test(@Req() req) {
    console.log('user: ', req.user);

    return {
      name: 'Usuário autenticado!',
    };
  }
}
