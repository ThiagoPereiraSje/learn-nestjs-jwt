import { Injectable } from '@nestjs/common';

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
  login(username: string, password: string) {
    console.log({ username, password });
  }
}
