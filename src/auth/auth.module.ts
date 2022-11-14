import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  controllers: [LoginController, AuthController]
})
export class AuthModule {}
