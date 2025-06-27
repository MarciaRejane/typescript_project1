function combine(valor1: boolean, valor2: number): boolean | number {
    if (valor1) {
        return valor2; 
    } else {
        return false;  
    }
}
console.log(combine(true, 10));
console.log(combine(false, 5));