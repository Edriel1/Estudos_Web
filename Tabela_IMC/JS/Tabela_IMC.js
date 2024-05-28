const tabela =  document.querySelector(`.Tabela`);
const form = tabela.querySelector(`.formulario`);
const resultado = document.querySelector(`#Resultado`);

form.addEventListener('submit', function(evento) {
    evento.preventDefault();

    let peso = evento.target.querySelector(`#Peso`);
    let altura = evento.target.querySelector(`#Altura`);
    
    peso = Number(peso.value);
    altura = Number(altura.value);

    const texto = create_tagp();

    resultado.innerHTML = '';

    if(!peso){
        texto.innerHTML = 'O peso digitado não e valido.';
        setResultado(texto);       
        return;
    }
    if(!altura){
        texto.innerHTML = `A altura digitada não e valida.`;
        setResultado(texto);
        return;
    }

    let imc = calcular_imc(peso, altura);
    imc = imc.toFixed(2);

    resultado_add_class(imc, texto);

    setMensagem(texto, imc);

    setResultado(texto);

    })

function setMensagem(texto, imc) {
    texto.innerHTML = `O valor do seu IMC é ${imc}.`;
}

function resultado_add_class(imc, texto) {
    if(imc < 18.5){
        texto.classList.add('baixo_peso');
    }
    else if (imc >= 18.5 && imc <= 24.9){
        texto.classList.add('peso_normal');
    }
    else if(imc >= 25 && imc <= 29.9){
        texto.classList.add('sobrepeso');
    }
    else if(imc >= 30){
        texto.classList.add('obesidade');
    }
}

function calcular_imc(peso, altura) {
    return peso / altura ** 2;
}

function create_tagp() {
    const p = document.createElement('p');
    return p;
}

function setResultado(mensagem) {
    resultado.appendChild(mensagem);
}