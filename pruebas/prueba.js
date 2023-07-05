const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');
require('dotenv').config();

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


server.listen(process.env.API_PORT || 3001, () => {
    console.log(`%s listening at ${process.env.API_PORT} `)
});

function saludar(nombre) {
    console.log('Hola ' + nombre);
  };
  
  function procesarEntradaUsuario(callback) {
    var nombre = "Hugo";
    callback(nombre);
  };
  
  procesarEntradaUsuario(saludar);


var f = () => {
    'use strict';
    var variable = 'variable';
    console.log("Prueba:",this.variable);
    return this;
};

f() === "window";// o el objeto global

function f1(){
    var tradicional = "Tradicional";
    console.log(tradicional);
};

f1();




