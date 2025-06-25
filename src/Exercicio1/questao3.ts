//Ver a multiplicação
let resultado: number = 30 *3;
console.log(resultado);

//O nome fica maiusculo
let unicoNome: string = "josé";
console.log(unicoNome.toUpperCase());

//Saber se o a variavel é booleano, numero ou string
let trueFalse: boolean = true;
if (typeof trueFalse === 'number') {
console.log("A variavel é um numero", trueFalse);
} else if (typeof trueFalse === 'string') {
    console.log("A variavel é uma string",trueFalse);
} else if ( typeof trueFalse === 'boolean') {
    console.log("A variavel é booleano", trueFalse);
}

//Saber se o valor é undefined
let valorUnderfined: undefined = undefined;
if (valorUnderfined === undefined) {
    console.log("O valor é undefined");
}