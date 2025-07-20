//importando a interface venda
import { Venda } from "./interfaces/Ivenda";
import { gerarResumoVendas, atualizarStatusVenda, registrarVenda, prepararVendaParaCliente } from './utils/relatorioVendas';

//Lista de vendas
const vendas: Venda[] = [{
    idVenda: "1",
    data: "2025-03-01",
    valorTotal: 500.50,
    clienteId: "4",
    status: "pendente",

},
{
    idVenda: "2",
    data: "2025-03-01",
    valorTotal: 250.00,
    clienteId: "3",
    status: "concluida",

},
{
    idVenda: "3",
    data: "2025-03-01",
    valorTotal: 300.50 ,
    clienteId: "2",
    status: "cancelada",

},
];

//Testar gerarResumoVendas, exibe um resumo das vendas.
console.log(`Resumo de vendas`, gerarResumoVendas(vendas));

//Atualiza o status da primeira venda para concluida.
const vendaAtualizada = atualizarStatusVenda(vendas[0], {status: "concluida"});
console.log("Venda atualizada", vendaAtualizada);

//Cria outra venda feita e registra ela com o tipo Readonly que não pode ser alterada.
const novaVenda: Readonly<Venda> ={
    idVenda: "4",
    data: "2025-03-02",
    valorTotal: 180.00,
    clienteId: "5",
    status: "pendente",
};
console.log("Registro da nova venda");
registrarVenda(novaVenda);

const vendaClientes = prepararVendaParaCliente(vendas[2]);
console.log(vendaClientes);

for(const venda of vendas){
    if(venda.status === "concluida"){
        console.log("Venda concluida ",venda);
    }
}


