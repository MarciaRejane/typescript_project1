function combine(valor1: number | boolean, valor2: number | boolean): boolean | number {
    if (typeof valor1 === 'boolean' && typeof valor2 === 'number') {
        return valor1; 
    } else if(typeof valor1 === 'number' && typeof valor2 === 'boolean'){
        return valor2;  
    } else {
        return valor1;
    }
}
console.log(combine(true, 10));
console.log(combine(false, 5));
console.log(combine(7,15));
console.log(combine(true,false));