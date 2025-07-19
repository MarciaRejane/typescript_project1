//exportou a interface DadosBase e sua propriedade que é id
export interface DadosBase {
    id: any;// pode ser string, number.
};

//exportou a interface DadosUsuario que define os dados do usuario
export interface DadosUsuario {
    nome: string;
    email: string;
}

//exportou a interface DadosProdutos que define os dados de um produto
export interface DadosProduto{
    produtoId: string;
    valor: number;
}

//type que combinas as propriedades de DadosBase e DadosUsuario usando interseção
export type UsuarioCompleto = DadosBase & DadosUsuario

//type que combinas as propriedades de DadosBase e DadosProduto usando interseção
export type ItemPedido = DadosBase & DadosProduto