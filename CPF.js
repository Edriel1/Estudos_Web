function Cpf(valor) {
    let value = valor;

    const validarConstrutor =  (valor) => {if(this.verificarValor(valor))return value = valor;
        value = false;
        console.log('valor invalido');}
    validarConstrutor(value);

    Object.defineProperty(this, 'value', {
        enumerable: true,
        configurable: false,
        get: () => value,
        set: (valor) => {if(this.verificarValor(valor)) return value = valor;
            value = false;
            console.log('valor invalido');
        }
    });
}

Cpf.prototype.verificarValor = function (valor = this.value) {
    let valorLimpo = valor.replace(/\D+/g, '');
    valorLimpo = Array.from(valorLimpo);
    console.log(valorLimpo);
    const valorChecagem = valorLimpo.slice(9, 11);
    valorLimpo = valorLimpo.slice(0, -2);
    console.log(valorChecagem);

    if(!(Number(valorChecagem[0]) === this.uteis.pegaUltimoDoisDigitos(valorLimpo, 1))) return false;

    valorLimpo.push(valorChecagem[1]);

    if(!(Number(valorChecagem[1]) === this.uteis.pegaUltimoDoisDigitos(valorLimpo, 2))) return false;

    return true;
}

Cpf.prototype.uteis = {

    pegaUltimoDoisDigitos(array, indice_digito) {
        let somaDigitos = array.reduce((acumulador, valor, indice) =>{
        acumulador += ((9 + indice_digito) - indice) * Number(valor);
        return acumulador;

    }, 0);

    console.log(somaDigitos);
        return (11 - (somaDigitos % 11));

    }
}

//Testando objeto
//const CPF = new Cpf('115.921.984-22');
//console.log(CPF.value);
//console.log(CPF.verificarValor('123.123.123-11'));
//CPF.value = '115.921.984-22';
//console.log(CPF.verificarValor('115.921.984-22'));