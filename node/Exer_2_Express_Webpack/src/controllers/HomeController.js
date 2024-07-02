exports.inicial = (req, res) => {
    res.send(`Voce chegou a pagina inicial, escreva /contato no link para ir para a proxima pagina.`);
}

exports.middleInicial = (req, res, next) => {
    console.log('passando pelo middlercontroll');
    next();
}