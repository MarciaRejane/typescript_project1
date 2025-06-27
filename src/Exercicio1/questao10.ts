let result: string | number;

function exibirTipo(valores: string | number | boolean ) {
    console.log(typeof valores);
}

result = "string";
exibirTipo(result);

result = 12345;
exibirTipo(result);


exibirTipo(true);
exibirTipo(15);
exibirTipo("palavra");
