const express = require('express');

const app = express();

app.use(express.json());

app.use(require('./Routes/route'));

app.listen(33001, () => {
  console.log('estou rodando na porta 33001');
})
