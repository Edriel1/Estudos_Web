// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     Titulo: 'testando acesso',
//     Descricao: 'Testando o mongoose'
// })
// .then((dados) => {console.log(dados)})
// .catch((e) => {console.log(e)});

exports.inicial = (req, res) => {
    res.send(`Home inicial`);
}