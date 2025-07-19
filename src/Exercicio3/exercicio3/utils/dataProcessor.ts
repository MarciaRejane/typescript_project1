import { UsuarioCompleto } from "../types/Dados";
import { ItemPedido } from "../types/Dados";


export function processarDados (dados: any[]) {
    for(let i =0; i < dados.length; i ++){
        const item = dados[i];
        
        if( item && typeof item.nome === "string" && typeof item.email === "string"){
            const usuario = item as UsuarioCompleto;
            console.log(`Uauario ${i}:`);
            console.log(`ID: ${usuario.id}`);
            console.log(`Nome: ${usuario.nome}`);
            console.log(`Email: ${usuario.email}`);
        
        }else if ( item && typeof item.produtoId === "string" && typeof item.valor === "number"){
            const pedido = item as ItemPedido;
            console.log(`Pedido ${i}:`);
            console.log(`ID: ${pedido.id}`);
            console.log(`Produto: ${pedido.produtoId}`);
            console.log(`Valor: ${pedido.valor}`);
        
        }else{
            console.log(`Item ${i} tem estrutura desconhecida:`);
            console.log(item);
        }
    }
}