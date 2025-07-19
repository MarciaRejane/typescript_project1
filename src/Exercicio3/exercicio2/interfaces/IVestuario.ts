//Importa a interface ItemCatalogo.
import { ItemCatalogo } from "./IItemCatalogo";

//Interface vestuario que  herda as propriedades de ItemCatalogo, 
// e adiciona a propriedade tamanho para roupas.
export interface Vestuario extends ItemCatalogo {
    tamanho: string;
}