import { ItemCatalogo } from "../interfaces/IItemCatalogo";

//exporta a classe 
export class CatalogoGenerico<T extends ItemCatalogo>{
    //Lista privada, que os produtos do catalogo são armazenados.
    private produtos: T[] = [];

    //Metodo para adicionar um produto na lista.
    adicionarProduto(produto: T): void{
        this.produtos.push(produto);
    }

    //Retorna todos os produtos do catalogo.
    listarProdutos(): T[] {
        return this.produtos;
    }

    // buscar produtos pelo nome
    buscarPorNome(nome: string): T[]{
        const resultado: T[] = [];//Armazena produtos encontrados
        const termoBusca = nome.toLowerCase();//Deixa tudo minusculo

        //Verifica se o nome contem o termo de busca.
        this.produtos.forEach((produto) => {
            if (produto.nome.toLowerCase().includes(termoBusca)) {
                resultado.push(produto);
            }
        });
        return resultado;//REtorna todos os produtos encontrados
    }
}