function impar(num: any): boolean {
    function numero(value:any): value is number{
        return typeof value === 'number';
    }

    if (numero(num)){
        return num % 2 !==0;
    } else {
        return false;
    }

}

console.log(impar(50));
console.log()