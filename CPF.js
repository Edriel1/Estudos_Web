function Cpf(valor) {
    Object.defineProperty(this, 'cpf', {
        enumerable: true,
        configurable: false,
        get: () => Cpf,
        set: (valor) => cpf = valor
    });
}