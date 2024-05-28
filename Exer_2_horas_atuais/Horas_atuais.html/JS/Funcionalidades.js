function nomeMes(DateMonth) {
    const nome_meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return nome_meses[Number(DateMonth)];
}

function addZeroLeft(number){
    if(number < 0) return `-0${-(number)}`;
    if(number < 10) return `0${number}`;
    if(number >= 10) return number;
    return undefined;
}

function nameDayWeek(number) {
    const days_week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];

    return days_week[number];
}

export {nomeMes, addZeroLeft, nameDayWeek};
//module.exports = {nomeMes, addZeroLeft, nameDayWeek};