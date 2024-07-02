const express = require('express');
const app = express();
const path = require('path');
const routes = require(path.resolve(__dirname, 'routes.js'));

app.use(express.urlencoded({extends: true}));

app.use(routes);

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {console.log('Servidor ligado')});