export default function formatarNome(nomeCompleto: string): string {
    //Separa o nome por espaços
    const nomeTodo = nomeCompleto.split(" ");

    //VErifica se o nome esta vazio.
   if(nomeTodo.length === 0){
       return nomeCompleto;
    }
    //Formatando o nome
    const nomeFormatado = nomeTodo.map((nomeParte, index) => {
        if (index === 0){
            //Retorna o primeiro nome maiúscula.
            return nomeParte.toUpperCase();
        }else {
            //Retorna as primeiras letras maiúscula, e o resto no nome minúsculo.
            return nomeParte.charAt(0).toUpperCase() + nomeParte.slice(1).toLowerCase();
        }
    });
    //Junta todas as partes formatadas com espaço entre elas.
    return nomeFormatado.join(" ");  
}

const nome = "joão silva souza";
//Mostra o nome como estava 
console.log(nome);
//Mostra o nome formatado
console.log(formatarNome(nome));

export function contarVogais(texto: string): number{
    //inicia o contador de vogais.
    let contador = 0;
    //String com todas as vogais, maiúscula e minúscula.
    const vogais = "aeiouAEIOU";


    for (let i = 0; i < texto.length; i++){
        //Verifica se a letra é uma vogal
        if(vogais.includes(texto[i])){
            contador++ //Incrementa o contador
        }
    }
    //Retorna a quantidade de vogais 
    return contador;
}

//Nome que ira aparecer
const palavra = "Maria Clara Silva";
//conta as vogais do nome
const numeroVogais = contarVogais(palavra);
//Mostra o resultado.
console.log(`O nome ${palavra} tem ${numeroVogais} vogais.`);