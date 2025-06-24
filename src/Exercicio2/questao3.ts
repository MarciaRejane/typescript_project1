function gerarSaudacao(pessoa: {primeiroNome:string; ultimoNome?: string }) {
    
    if (pessoa.ultimoNome) {
        return `Ola, ${pessoa.primeiroNome} ${pessoa.ultimoNome}!`;
    }  else {
        return `Ola, ${pessoa.primeiroNome}!`;
    }
}

const pessoa1 = {primeiroNome: "Ana", ultimoNome: "Silva"};
const pessoa2 = {primeiroNome: "Pedro"};

console.log(gerarSaudacao(pessoa1));
console.log(gerarSaudacao(pessoa2));

