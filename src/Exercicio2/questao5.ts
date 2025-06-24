type StatusPedido = "pendente" | "processando" | "concluido" | "cancelado";


interface Produto {
    id:number;
    nome:string;
    preco:number;
}

enum PrioridadeEnvio {
    baixa = 1,
    media = 2,
    alta = 3,   
}


function exibirDetalhesPedido(pedido: Produto, status: StatusPedido, prioridade: PrioridadeEnvio) {
    console.log("Detalhes do pedido");
    console.log(`Produto ID: ${pedido.id}`);
    console.log(`Nome do Produto: ${pedido.nome}`);
    console.log(`Preço: ${pedido.preco}`);
    console.log(`Status do pedido ${status}`);
    console.log(`prioridade de Envio: ${prioridade}`);
}

exibirDetalhesPedido({id:101, nome:"camisa", preco:29.99}, "pendente", PrioridadeEnvio.media);
