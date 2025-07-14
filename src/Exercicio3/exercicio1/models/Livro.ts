//Importei a classe Pulblicação do outro arquivo.
import { Publicacao } from "./Publicacao";

//Classe Livro que herda de PUblicação.
export class Livro extends Publicacao{
    //Propriedades especificas da classe livro.
    autor: string;
    anoPublicacao: number;
    estaDisponivel: boolean;

    //construtor da classe livro.
    constructor(id: string,titulo: string, autor: string, anoPublicacao: number) {
        //chama o construtor da classe Publicação.
        super(id, titulo);
        //inicializa propriedades especificas de livro.
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.estaDisponivel = true;
       
    }
    //Metodo emprestar livro.
    emprestar(): boolean {
        if(this.estaDisponivel){
            this.estaDisponivel = false;
        return true;
    } else{
        return false;
    }
    
}
    //Metodo devolver livro.
    devolver(): boolean {
        if(!this.estaDisponivel){
            this.estaDisponivel = true;
        return true;
    } else{
        return false;
    }
    }
}