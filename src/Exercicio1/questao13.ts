function verificarTipo(tipo: string | number){
    if (typeof tipo === "string") {
        console.log(`O tipo é uma string: ${tipo}`);
    } else{
        console.log(`O tipo é um numero: ${tipo}`);
    }
}

verificarTipo("Ola");
verificarTipo(123);