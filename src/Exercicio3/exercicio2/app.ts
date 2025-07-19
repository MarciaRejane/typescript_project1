import { Eletronico } from "./interfaces/IEletronico";
import { Vestuario } from "./interfaces/IVestuario";
import { CatalogoGenerico } from "./models/CatalogoGenerico";

//criando os produtos do tipo Eletronico e Vestuario.
const celular:Eletronico ={
    id:1, 
    nome:"Celular Poco", 
    preco: 1300, 
    marca: "Xiaomi"
};
const camisa:Vestuario ={
    id:5, 
    nome:"Regata", 
    preco: 50, 
    tamanho:"M"
};

//Criei catalogo eletronico 
const catalogoEletronico = new CatalogoGenerico<Eletronico>();
catalogoEletronico.adicionarProduto(celular);
//Criei catalogo vestuario
const catalogoVestuario = new CatalogoGenerico<Vestuario>();
catalogoVestuario.adicionarProduto(camisa);

//mostrando no console
console.log("Eletronico");
console.log(catalogoEletronico.listarProdutos());

console.log("Vestuario");
console.log(catalogoVestuario.listarProdutos());

const buscar = "camisa";
const resultadoBusca = catalogoVestuario.buscarPorNome(buscar);

//verificando o resultado da busca
if(resultadoBusca.length > 0){
    console.log(`Resultado da busca ${buscar}:`);
    console.log(resultadoBusca);
}else{
    console.log(`Nenhum produto encontrado ${buscar}`)
}

