import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';

const users = [
  {
    id: 1,
    username: 'user1@user.com',
    password: '$2b$10$.6vVP5Nr92EDSTGvrrbckOkHb2yrftwOgcBkKzLQNIgXoBYvDWSeq', //123
  },
  {
    id: 2,
    username: 'user2@user.com',
    password: '$2b$10$swbr4Y/k7q3ML2QvTFpCeOyOQEmNhKSpslHdg/wUtTce2NOL4bziK', //456
  },
  {
    id: 3,
    username: 'user3@user.com',
    password: '$2b$10$UK.hSZk7GnJLMs0pyZm9Q.INWi0hO34VUeACCQGbBhoDprf7pzk/6', //789
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(username: string, password: string) {
    const user = this.validadeCredentials(username, password);

    const payload = {
      // subject: Dono do token, ou para quem ele foi gerado!
      sub: user.id,
      username: user.username,
    };

    return this.jwtService.sign(payload);
  }

  validadeCredentials(username: string, password: string) {
    const user = users.find(
      (u) => u.username === username && compareSync(password, u.password),
    );

    return user;
  }
}
