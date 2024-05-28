const timer = document.querySelector('.Timer');
let time = 0;
let temporizador;

document.addEventListener('click', function(e){
    const event = e.target;

    if(event.classList.contains('iniciar')) iniciarCronometro();

    else if(event.classList.contains('pausar')){
        clearInterval(temporizador);
        timer.classList.add('pausado');
    }

    else if(event.classList.contains('zerar')){
        clearInterval(temporizador);
        time = 0;
        if(timer.classList.contains('pausado')){
            timer.classList.remove('pausado');
        }
        timer.innerText = '00:00:00';
    }
})

function iniciarCronometro() {
    clearInterval(temporizador);

    if (timer.classList.contains('pausado')) timer.classList.remove('pausado');

    temporizador = setInterval(function () {
        time++;

        timer.innerHTML = getHorarioAtual(time);
}, 1000); 
}

function getHorarioAtual(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'

    });
}