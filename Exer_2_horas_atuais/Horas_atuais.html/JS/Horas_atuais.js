import { nomeMes, addZeroLeft, nameDayWeek } from './Funcionalidades.js';
//const { nomeMes } = require('./Funcionalidades');
//const { addZeroLeft } = require('./Funcionalidades');
//const { nameDayWeek } = require('./Funcionalidades');
const Tabela = document.querySelector('.Tabela');

function start() {
    
    let texto_resultado = gerarParagrafo();

    const data = new Date();

    const dia_mes = data.getDate();
    const ano = data.getFullYear();
    const mes = nomeMes(data.getMonth()); 
    const horas = addZeroLeft(data.getHours());
    const minutos = addZeroLeft(data.getMinutes());
    const dia_semana = nameDayWeek(data.getDay());
    
    texto_resultado.innerHTML = `${dia_semana}, ${dia_mes} de ${mes} de ${ano}\n${horas}:${minutos}`;

    Tabela.innerHTML = '';
    Tabela.appendChild(texto_resultado);
};start();

function gerarParagrafo() {
    let p = document.createElement('p');
    return p;
}