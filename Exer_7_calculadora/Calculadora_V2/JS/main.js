function Calculadora() {
    const input = document.querySelector('.input');
    const conteiner = document.querySelector('.conteiner');
    
    function iniciarBotoes() {
        conteiner.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('num')) escreverInput(el);

            else if(el.classList.contains('deletar')) zerarInput();

            else if(el.classList.contains('apagar')) apagaDigito();

            else if(el.classList.contains('igual')) resultadoInput();
        });
    };

    function resultadoInput() {
        input.value = eval(input.value);
    }

    function apagaDigito() {
        input.value = input.value.slice(0, -1);
    }

    function zerarInput() {
        input.value = '';
    }

    function escreverInput(el) {
        input.value += el.innerText;
    }

    this.iniciar = () => {
        iniciarBotoes();
        this.resultadoTeclado();
    };

    this.resultadoTeclado = () => {
        input.addEventListener('keyup', (e) => {
            if(e.keyCode === 13) resultadoInput();
        });
    };
}

const calculadora = new Calculadora();
calculadora.iniciar();