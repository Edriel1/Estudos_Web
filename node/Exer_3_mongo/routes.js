const express = require('express');
const route = express.Router();
const path = require('path');

const Home = require(path.resolve(__dirname, 'src', 'controllers', 'HomeControllers'));
const contato = require(path.resolve(__dirname, 'src', 'controllers', 'ContatoControllers'));

route.get('/', Home.inicial);

route.get('/contato', contato.inicial);

module.exports = route;