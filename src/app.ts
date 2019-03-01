import express = require('express');
import ForgeRSA from './ForgeRSA';

// // Create a new express application instance
const app: express.Application= express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

let forgeRSA = new ForgeRSA();
forgeRSA.crearRSAKey();
