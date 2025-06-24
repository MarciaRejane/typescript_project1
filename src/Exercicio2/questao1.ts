function processarDados(nome: string, idades:number[]): void{
    console.log(`Olá,${nome.toUpperCase()}`);

    let soma = 0;
    for (const idade of idades) {
        soma += idade;
    }

    console.log(`Soma das idades ${soma}`);

    if(idades.length > 0) {
        if(idades[0] % 2==0) {
            console.log("A primeira é par.");
        } else {
            console.log("A primeira idade é impar.");
        }
    }
}
processarDados("João",[25,30,22])