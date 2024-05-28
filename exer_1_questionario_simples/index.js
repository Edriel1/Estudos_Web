function index(){
const form = document.querySelector('.form');
pessoas = [];
let resultado = document.querySelector('.Resultado');
console.log(1);

form.addEventListener('submit', alternarFuncaoForm);

function alternarFuncaoForm(evento){
    evento.preventDefault();
    nome = getInputFormValue(form, '.Nome');
    sobrenome = getInputFormValue(form, '.Sobrenome');
    apelido = getInputFormValue(form, '.Apelido');
    idade = getInputFormValue(form, '.Idade');
    pessoas.push(gerarPessoas(nome, sobrenome, apelido, idade));
    
    mostrarResultado(pessoas[(pessoas.length - 1)]);
}

function mostrarResultado(pessoa){
    resultado.innerHTML += `<p>Nome: ${pessoa.nome}<br/>` +
                              `Sobrenome: ${pessoa.sobrenome}<br/>` +
                              `Apelido: ${pessoa.apelido}<br/>` +
                              `Idade: ${pessoa.idade}</p>`;
}

/*let Pessoa = {
    nome, sobrenome, apelido, idade,

        setNome(Nome) {
            this.nome = Nome;
        },

        setSobrenome(Sobrenome){
            this.sobrenome = Sobrenome;
        },

        setApelido(Apelido){
            this.apelido = Apelido;
        },

        setIdade(Idade){
            this.idade = Idade;
        }

};*/

function gerarPessoas(nome, sobrenome, apelido, idade){
    /*let uma_pessoa = Pessoa;

    uma_pessoa.setNome(nome);
    uma_pessoa.setSobrenome(sobrenome);
    uma_pessoa.setApelido(apelido);
    uma_pessoa.setIdade(idade);*/

    let uma_pessoa = {
        nome,
        sobrenome,
        apelido,
        idade
    }

    return uma_pessoa;
    
}

/*form.onsubmit = function (evento){
    evento.preventDefault();
}*/


function getInputFormValue(endereco_form, endereco_value){
    endereco_value = endereco_form.querySelector(endereco_value);
    return endereco_value.value;
}};

index();