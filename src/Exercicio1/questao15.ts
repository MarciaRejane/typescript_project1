let lista: (number| string | boolean)[] = [
    56,"Olá", false
];
lista.forEach((item) => {
    if(typeof item === "string") {
        console.log(`string: ${item.trim()}`);
    } else if ( typeof item === "number") {
        console.log(`Número: ${item.toFixed(2)}`); 
        } else if(typeof item === "boolean") {
            console.log(`booleano: ${item ?"verdadeiro" : "Falso"}`);
        }
    
});
