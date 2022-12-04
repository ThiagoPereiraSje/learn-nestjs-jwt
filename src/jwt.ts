import { createHmac } from 'crypto';

const header = {
  alg: 'HS256', // Algoritmo Hmac + Sha256
  typ: 'JWT',
};

// Corpo de dados (Dados principais do token)
const payload = {
  username: 'user1@user.com',
  name: 'Thiago Pereira',
  exp: new Date().getTime(), // Tempo de expiração do token (timestamp)
};

// Validade do token (Assinatura, ou carimbo no cartório)
const key = 'abcd23456';

const headerEncoded = Buffer.from(JSON.stringify(header)).toString('base64url');
const payloadEncoded = Buffer.from(JSON.stringify(payload)).toString(
  'base64url',
);

// console.log({ headerEncoded, payloadEncoded });

const hmac = createHmac('sha256', key);
const signature = hmac
  .update(`${headerEncoded}.${payloadEncoded}`)
  .digest('base64url');

// console.log({ signature });

console.log(`token: ${headerEncoded}.${payloadEncoded}.${signature}`);
