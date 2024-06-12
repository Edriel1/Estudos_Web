import {Cpf} from "../../CPF.js";

function Formulario(nome, sobrenome, cpf, senha) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            configurable: false,
            get: nome,
            set: this.validaNome(nome)
        },
        sobrenome: {
            enumerable: true,
            configurable: false,
            get: sobrenome,
            set: this.validaSobrenome(sobrenome)
        },
        cpf: {
            enumerable: true,
            configurable: false,
            get: cpf.value,
            set: new Cpf(cpf)
        },
        senha: {
            enumerable: true,
            configurable: false,
            get: senha,
            set: validaSenha(senha)
        }
    })
}

Formulario.prototype.validaNome = (nome) => {
    if(!nome) return false;
    if(typeof nome !== 'string') return false;
    if(nome.length < 3 || nome.length > 12) return false;
    if()
}