import { processarDados } from "./utils/dataProcessor";

//Array de dados recebidos
let dadosRecebidos: any[] = [
    {
        id: 1,
        nome: "Ana Cecilia",
        email: "anaCelicia@email.com"
      },
      {
        id: 2,
        produtoId: "3456",
        valor: 50.0
      },
      {
        id: 3,
        descricao: "Objeto desconhecido"
      }
];
//chama a função procesarDados
processarDados(dadosRecebidos);