const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = process.argv.slice(2)[0];

bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    console.log('Erro: ', err.message || err);
    return;
  }

  bcrypt.hash(password, salt, (err, hash) => {
    if (err) {
      console.log('Erro: ', err.message || err);
      return;
    }

    console.log(hash);
  });
});
