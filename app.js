const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');
const { leerInput } = require('./helpers/inquirer');
require('dotenv').config();
const Reenvio = require('./models/reenvio');
const argv = require(./config/yargs);
const server = express();

server.name = 'API';
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cookieParser());
// server.use(morgan('short'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// const main = async() => {
//   const texto = await leerInput('Hola: ');
//   console.log( texto );
// }

// main();



// Error catching endware.
/* server.use((err, req, res) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
}); */
server.listen(process.env.API_PORT || 3001, () => {
    console.log(`%s listening at ${process.env.API_PORT} `); 
  });

const reenvio = new Reenvio()

reenvio.peticion()

console.log(this);

module.exports = server;