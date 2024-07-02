const express = require('express');
const route = express.Router();
const path = require('path');
const HomeController = require(path.resolve(__dirname, 'src', 'controllers', 'HomeController'));
const ContatoController = require(path.resolve(__dirname, 'src', 'controllers', 'ContatoController'));

route.get('/', HomeController.inicial);

route.get('/contato', HomeController.middleInicial, ContatoController.inicial)

module.exports = route;