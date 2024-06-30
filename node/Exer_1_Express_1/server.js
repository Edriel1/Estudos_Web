const express = require('express');
const app = express();

app.use(express.urlencoded({ extends: true})); //Configurando para tratar entrada de dados do html

app.get('/', (req, res) => {
    res.send(` 
        Hello word\n
        <form method="POST" action="/">
        Nome: <input name="nome" type="text">
        <button>Enviar</button>
        </form>\n
    `);
});

app.get('/:info?', (req, res) => {
        console.log(`
        O query digitado foi: ${req.query.nome};
        `);
        
        res.send(`
        O parametro colocado foi: ${req.params.info}\n
        `);
        
    }    
);

app.post('/', (req, res) => {
    res.send(`O nome digitado foi: ${req.body.nome}`)
});


        

app.listen(3000, () => {
    console.log('http://localhost:3000');
});