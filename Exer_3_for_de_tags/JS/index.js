const resultado = document.querySelector('.Resultado');
const tags = [
    {tag: 'p', nome: 'Fase 1'},
    {tag: 'div', nome:'Fase 2'},
    {tag: 'footer', nome: 'Fase 3'},
    {tag: 'section', nome: 'Fase 4'}
];
const elementos = [];
function main() {
    for(let i = 0; i < tags.length; i++){

        let elemento = gerarTag(tags[i].tag);
        elemento.innerHTML = tags[i].nome;

        elementos.push(elemento);

        resultado.appendChild(elemento);
    }
}main();

function gerarTag(nome_tag) {
    let tag = document.createElement(nome_tag);
    return tag;
}

// function gerarTagP() {
//     let p = document.createElement('p');
//     return p;
// }
//
// function gerarTagDiv() {
//     let div = document.createElement('div');
//     return div;
// }

// function gerarTagFooter() {
//     let footer = document.createElement('footer');
//     return footer;
// }

// function gerarTagSection() {
//     let section = document.createElement('section');
//     return section;
// }
