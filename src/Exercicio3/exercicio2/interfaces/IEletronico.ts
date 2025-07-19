//Importa a interface ItemCatalogo
import { ItemCatalogo } from "./IItemCatalogo";

//Exporta a interface Eletronico com a propriedade marca,
//  e esta herdando as propriedades da interface de ItemCatalogo.
export interface Eletronico extends ItemCatalogo{
    marca: string;
}
