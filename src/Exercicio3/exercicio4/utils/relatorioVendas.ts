//Importando a interface venda.
import { Venda } from "../interfaces/Ivenda";

//Função que recebe lista de vendas completas, e devolve resumo com três propriedades.
export function gerarResumoVendas(vendas: Venda[]): Pick<Venda, 'idVenda' | 'valorTotal' | 'status'>[] {
    return vendas.map((venda) => ({
        idVenda: venda.idVenda,
        valorTotal: venda.valorTotal,
        status: venda.status,
    }));
}

//Função que recebe uma venda e um objeto com novos valores status e retorna uma nova venda atualizada.
export function atualizarStatusVenda(vendaOriginal: Venda, novoStatus: Partial<Venda>): Venda{
    return ({
        ...vendaOriginal,
        ...novoStatus
    });
    
}

//Função que mostra os registros da venda no console.
export function registrarVenda(venda: Readonly<Venda>): void{
    console.log(`Detalhes da venda: ${venda}`);
    // Tentar modificar venda resultaria em erro de compilação.
}

//Função que remove as propriedades clienteId, status, e retorna um novo objeto com o restante.
export function prepararVendaParaCliente(venda: Venda): Omit<Venda, 'clienteId' | 'status'>{
    const { clienteId, status, ...resto } = venda;
    return resto;
    
}

