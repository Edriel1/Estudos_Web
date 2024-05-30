const inputTarefas = document.querySelector('.cria_tarefas');
const botaoTarefas = document.querySelector('.criar_tarefa');
const listaTarefas = document.querySelector('.Tarefas');

function getTarefas() {
    const tarefa = localStorage.getItem('Tarefas');
    const listaLi = JSON.parse(tarefa);

    for(let li of listaLi){
        criarTarefa(li);
    }
}getTarefas();

function salvar() {
    const listaLi = listaTarefas.querySelectorAll('li');
    const arrayLi = [];
    
    for(let li of listaLi){
        let texto = li.innerText;
        texto = texto.replace('Apagar', '').trim();
        arrayLi.push(texto);
    }

    const jsonLi = JSON.stringify(arrayLi);

    localStorage.setItem('Tarefas', jsonLi);

}

function limpaInput() {
    inputTarefas.value = '';
    inputTarefas.focus();
}

document.addEventListener('click', function(e) {
    const butao = e.target;

    if(butao.classList.contains('criar_tarefa')){
        if(!inputTarefas.value) return;


        criarTarefa(inputTarefas.value);}

    if(butao.classList.contains('Apagar')){
        butao.parentElement.remove();
    }

    salvar();

})

document.addEventListener('keypress', function(e) {

    if(e.keyCode !== 13 || !inputTarefas.value) return;


    criarTarefa(inputTarefas.value);

    salvar();

})

function criarTarefa(texto) {
    const tarefa = criaLi();

    tarefa.innerText = texto;
    tarefa.appendChild(criaButaoApagar());

    limpaInput();

    listaTarefas.appendChild(tarefa);
}

function criaButaoApagar() {
    const butao = document.createElement('button');

    butao.setAttribute('class', 'Apagar');
    butao.innerText = 'Apagar';

    return butao;
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}