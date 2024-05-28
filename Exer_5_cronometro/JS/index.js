const timer = querySelector('.Timer');
const iniciar = querySelector('.iniciar');
const pausar = querySelector('.pausar');
const zerar = querySelector('.zerar');



iniciar.addEventListener('click', iniciarCronometro);

pausar.addEventListener('click', pausarCronometro)

function pausarCronometro() {
    setTimeout(function () {}, 1);
}

function iniciarCronometro() {

    timer.style.color = 'black';

    setInterval(function (cronometro) {
        timer.textHTML = getHorarioAtual();
}, 1000);
}

function getHorarioAtual() {
    const data = new Date();

    return data.toLocalTimeString('pt-BR', {hour12: false});
}

function gerarParagrafo() {
    const p = document.createElement('p');
    return p;
}