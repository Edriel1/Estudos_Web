//import {Cpf} from "../../CPF.js";

class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');

        this.event();

        
    }
    
    event(){
        this.formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            this.limpaErros();

            if(this.validaCampos()) alert('formulario enviado.');
        })
    }

    limpaErros(){
        for(let campo of this.formulario.querySelectorAll('.mensagem_erro')){
            campo.remove();
        }
    }

    validaCampos(){
        let valido = true;
        for(let campo of this.formulario.querySelectorAll('.validar')){
            const anterior = campo.previousElementSibling.innerText;
            

            if(anterior === 'Nome:') valido = this.validaNome(campo)? valido : false;
            else if(campo.classList.contains('sobrenome')) valido = this.validaSobrenome(campo)? valido : false;
            else if(campo.classList.contains('cpf')) valido = this.validaCpf(campo)? valido : false;
            else if(anterior === 'Senha:') valido = this.validaSenha(campo)? valido : false;
            else if(anterior === 'Repetir senha:') valido = this.validaSenhaRepetida(campo)? valido : false;
        }
        
        return valido;
    }

    validaNome(campo) {
        const valor = campo.value;
        let valido = true;

        if(!valor) {
            valido = false;
            this.criaErro(campo, 'O campo nome nâo pode estar vazio.');
        }

        if(valor < 3 || valor > 12){
            valido = false;
            this.criaErro(campo, 'O campo nome não esta dentro do limite de caracteres.');
        }

        if(!valor.match(/^[a-zA-Z0-9]+$/g)) {
            valido = false;
            this.criaErro(campo, 'O campo nome só pode ter letras e/ou numeros.');
        }
        
        return valido;
    }

    validaSobrenome(campo){
        const valor = campo.value;
        let valido = true;

        if(!valor){
            valido = false;
            this.criaErro(campo, 'O campo Sobrenome não pode estar vazio.');
        }

        return valido;
    }

    validaCpf(campo){
        const valor = new Cpf(campo.value);
        let valido = true;

        if(!valor.value){
            this.criaErro(campo, 'O campo cpf esta com valor invalido.');
            valido = false;    
        };

        return valido;
    }

    validaSenha(campo){
        const valor = campo.value;
        let valido = true;

        if(!valor){
            valido = false;
            this.criaErro(campo, 'O campo senha não pode estar vazio.');
        }

        if(valor.length < 6 || valor.length > 12){
            valido = false;
            this.criaErro(campo, 'O campo senha não esta dentro do limite de caracteres.');
        }

        return valido;
    }

    validaSenhaRepetida(campo){
        const valor = campo.value;
        let valido = true;

        if(!valor){
            valido = false;
            this.criaErro(campo, 'O campo repetir senha não pode estar vazio.');
        }

        if(valor !== (this.formulario.querySelector('.senha')).value){
            valido = false;
            this.criaErro(campo, 'A senha deve ser igual no campo senha e no repetir senha.');
        }

        return valido;
    }

    criaErro(campo, texto){
        const mensagem = document.createElement('div');
        mensagem.classList.add('mensagem_erro');
        mensagem.innerText = texto;
        campo.insertAdjacentElement('afterend', mensagem); 
    }
}

const formulario = new ValidaFormulario();