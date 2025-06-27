function tipo(strings: string | string[]): number {
    if(typeof strings === 'string') {
        return strings.length;
    } else {
        return( strings as string[]).reduce((total,str) =>  total+str.length,0);
    }
}
const hello = "Hello";
const world = "world";

console.log(tipo(hello));
console.log(tipo (world));