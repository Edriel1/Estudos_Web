import './css/style.css';
import geradorCpf from './modules/gerador_cpf.js';
alert(1);

const cpf = document.querySelector('.cpf');

document.addEventListener('click', e => {
    const el = e.target;

    if(el.classList.contains('Gerar_CPF')) cpf.innerText = geradorCpf.geraCpf();
})