//Exportando a classe 
export class OperacoesMatematicas{
    //Soma todos os numeros de um array.
    static somarArray(numeros: number[]): number{
        let soma = 0;
        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i]
        }
        return soma;
    }
    //Verifica se o número é par
    static ehPar(numero: number): boolean{
        if(numero % 2 === 0){
            return true;
        }else{
            return false;
        }
    }

}
//Exportando a constante com o valor máximo para comparação.
export const MAX_VALOR = 1000;