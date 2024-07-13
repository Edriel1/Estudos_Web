require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const routes = require(path.resolve(__dirname, 'routes.js'));
const mongoose = require('mongoose');
mongoose.connect(process.env.banco_de_dados)
.then(() => {
    console.log('pronto');
    app.emit('pronto');
})
.catch(e => console.log(e));

app.use(express.urlencoded({extends: true}));

app.use(routes);

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('pronto', () => {app.listen(3000, () => {console.log('iniciando servidor')});});