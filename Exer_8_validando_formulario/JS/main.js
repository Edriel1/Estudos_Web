//import {Cpf} from "../../CPF.js";

class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');

        this.event();

        
    }
    
    event(){
        this.formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            this.validaCampos();
        })
    }

    validaCampos(){
        for(let campo of this.formulario.querySelectorAll('.validar')){
            const anterior = campo.previousElementSibling.innerText;
            let valido = true;

            if(anterior === 'Nome:') valido = this.validaNome(campo);

        }
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

        if(!valor.match([/^a-zA-Z0-9+$/g])) {
            valido = false;
            this.criaErro(campo, 'O campo nome só pode ter letras e/ou numeros.');
        }
    }

    criaErro(campo, texto){
        const mensagem = document.createElement('div');
        mensagem.classList.add('mensagem_erro');
        mensagem.innerText = texto;
        campo.insertAdjacentElement('afterend', mensagem); 
    }
}

const formulario = new ValidaFormulario();