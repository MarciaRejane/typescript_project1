let dadosFlexiveis: any = "Olá Typescript";
console.log(dadosFlexiveis);

dadosFlexiveis = 123;
console.log(dadosFlexiveis);

function inserirTipo(valor:any) {
    console.log(typeof valor);
}
inserirTipo("Typescript");
inserirTipo(123);
