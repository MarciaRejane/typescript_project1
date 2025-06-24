function processarID(id: number | string): void {
    
    if (typeof id === "string") {
        console.log(`Seu ID em (string) em minúsculas: ${id.toLowerCase()}`);
    } else {
        console.log(` Seu ID (number) multiplicado por 2: ${id * 2}`);
    }
}

processarID("ABC123DEF")
processarID(100)

const nomes  = ["João", "Maria", "Lúcia"];

nomes.forEach(nome => {
   console.log(nome.toUpperCase()); 
});
