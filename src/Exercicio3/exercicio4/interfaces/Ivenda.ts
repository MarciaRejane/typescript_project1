//Exportndo a interface venda com suas propriedades.
export interface Venda {
    idVenda: string;
    data: string;
    valorTotal: number;
    clienteId: string;
    status: 'pendente' | 'concluida' | 'cancelada'
}

