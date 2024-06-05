console.log('começando testes de funcoes uteis.');

const nomes = ['nome1', 'nome2', 'nome3', 'nome4', 'nome5'];
const sobrenomes = new Array('sobrenome1', 'sobrenome2', 'sobrenome3', 'sobrenome4', 'sobrenome5');

console.log('testando os array.\n');

console.log(nomes);
console.log(sobrenomes);

console.log('');

console.log('Tirando o ultimo valor do array nomes, usando o comando pop');
let nome = nomes.pop();
console.log(`O valor tirado foi ${nome}.`);
console.log('Array nome atual.');
console.log(nomes);

console.log('\n Colocando o valor tirado em nomes para sobrenomes, usando o comando push.');
sobrenomes.push(nome);
console.log('Valores de sobrenome.');
console.log(sobrenomes);

console.log('\n Adicionando o valor tirado de nome devolta em nome, mas no inicio do array, com o comando unshift');
nomes.unshift(sobrenomes.pop());
console.log(nomes)

console.log('\n Tirando o primeiro valor de nomes e printando ele.');
console.log(`Valor tirado de nomes: ${nomes.shift()}.`);
console.log('Valor de nomes atual.');
console.log(nomes);

console.log('\n Usando o comado slice, tanto com numeros positivos quanto com numeros negativos.');
console.log('Pegando os valores de nomes do indice um ao 2:');
console.log(nomes.slice(1, 3));
console.log('Valores atuais de nomes, para mostra que slice nao altera o array original.');
console.log(nomes);
console.log('Fazendo o mesmo, mas usando numero negativo.');
console.log('Pegando os valores de nomes do indice um ao 2:');
console.log(nomes.slice(1, -1));

console.log('\n Usando o comando join para criar uma string apartir dos valores de nomes.');
nome = nomes.join(' ');
console.log(nome);

console.log('\n usando o comando split para converter a string anterior em um array para sobrenomes');
sobrenomes.push(nome.split(' '));
console.log(sobrenomes);


