function criaCalculadora() {
    return{
        conteiner: document.querySelector('.conteiner'),
        display: document.querySelector('.display'),

        iniciar() {
            this.clicarBotoes();
            this.apertarEnter();
            },

        apertarEnter() {
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13) this.calcular();
            })
        },

        clicarBotoes() {
            this.conteiner.addEventListener('click', (e) => {
                el = e.target;

                if(el.classList.contains('numero')){
                    this.adicionarAoDisplay(el);
                }

                else if(el.classList.contains('Deletar')){
                    this.limparDisplay(); 
                }

                else if(el.classList.contains('apagar')){
                     this.apagarDigito();
                }
                
                else if(el.classList.contains('igual')){
                    this.calcular();
                }
                });
        },

        adicionarAoDisplay(el) {
            this.display.value += el.innerText;
        },

        limparDisplay() {
            this.display.value = '';
        },

        apagarDigito(){
            this.display.value = this.display.value.slice(0, -1);
        },

        calcular() {
            this.display.value = eval(this.display.value);
        }
}
}

const inicializador = criaCalculadora();
inicializador.iniciar();