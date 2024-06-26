import cpf from "c:/Users/Carrefour/OneDrive/Documentos/estudos/web/CPF.js"

export default class gerador_cpf {

    static gera_9_numeros() {
        return (Math.random() * (999999999 - 100000000) + 100000000).toFixed(0);
    }

    static geraCpf() {
        const nove_digitos = Array.from(String(this.gera_9_numeros()));
        const Cpf = new cpf('00000000000');
        const primeiro_digito = String(Cpf.uteis.pegaUltimoDoisDigitos(nove_digitos, 1)); 
        const segundo_digito = String(Cpf.uteis.pegaUltimoDoisDigitos([...nove_digitos, primeiro_digito], 2));
        const texto_resultado = String(nove_digitos.slice(0, 3).join("") + '.' + nove_digitos.slice(3, 6).join('') + '.' + nove_digitos.slice(6, 9).join('') + '-' + primeiro_digito + segundo_digito);

        return texto_resultado;
    }
}
