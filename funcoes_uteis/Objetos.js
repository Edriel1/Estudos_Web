function Pessoa(nome, sobrenome, idade){

    Object.defineProperty(this, 'idade', {
        enumerable: true, //mostra a chave
        value: idade, //atribui valor
        writable: true, //pode ser alterado
        configurable: true //pode ser reconfigurado
    });

    Object.defineProperties(this,{
        nome: {
            enumerable: false,
            value: nome,
            writable: false,
            configurable: false
        },

        sobrenome: {
            enumerable: true,
            configurable: false,
            get: function () {return sobrenome;},
            set: function (valor) {sobrenome = valor;},
        }
    })
}

const P1 = new Pessoa('nome', 'sobrenome', 10);
console.log(P1);
console.log('Como se pode ver ao dar log no P1, as que estao como nao enumerable nao aparecem e as que tem get e set recebem a informacao de que se deve usar os metodos para saber seu  valor.');
console.log(P1.nome, P1.idade, P1.sobrenome);
console.log(Object.keys(P1));
console.log(Object.entries(P1));
console.log(Object.values(P1));
P1.nome = 'novonome';
P1.sobrenome = 'novosobrenome';
P1.idade = 9;
console.log(P1);
console.log(P1.nome, P1.sobrenome);
console.log(Object.getOwnPropertyDescriptor(P1, 'nome'));

Pessoa.prototype.mudaIdade = function (valor) {this.idade = valor;};

console.log('Testando prototype.');
const individuo = Object.create(Pessoa.prototype, {
    idade:{
        value: 10,
        enumerable: true,
        configurable: true,
        writable: true
    },

    cpf: {
        enumerable: true,
        configurable: false,
        get: () => cpf,
        set: valor => cpf = valor
    }
})
individuo.mudaIdade(9);
console.log(individuo);

const individuo2 = {
    idade: 10
};

Object.setPrototypeOf(individuo2, Pessoa.prototype);
individuo2.mudaIdade(9);
console.log(individuo2);