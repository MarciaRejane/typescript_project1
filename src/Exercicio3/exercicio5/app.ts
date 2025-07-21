//Importando as funções 
import formatarNome from "./utils/strings";
import { contarVogais } from "./utils/strings";
import { OperacoesMatematicas, MAX_VALOR } from "./utils/numeros";

//Formata o nome completo, deixand a primeira letra em maiuscula.
const meuNome = formatarNome(" marcia rejane rodrigues de souza ");
console.log(`Nome: ${meuNome}`);

//Conta o numero de vogais.
const vogais = contarVogais(meuNome);
console.log(`Esse nome tem: ${vogais} vogais`);

//Array de numeros 
const numeros: number[] = [10, 25, 5, 40, 15];
//Soma dos valores do array usando a função OperacoesMatematicas.
const soma = OperacoesMatematicas.somarArray(numeros);
console.log(`A soma dos números é ${soma}`);

//Verifica se a soma é um número par.
const par = OperacoesMatematicas.ehPar(soma);
    console.log(`Resultado da soma: ${par}`);

//Verifica se a soma ultrapassa o valor máximo permitido.
if (soma > MAX_VALOR){
    console.log("Soma excede o valor máximo permitido.");
}else{
    console.log("Soma dentro do limite.")
}
    
