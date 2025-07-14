import { Publicacao } from "./models/Publicacao";
import { Livro } from "./models/Livro";

//Dois livros e as informações deles
const livro1 = new Livro("1", "As Crônicas de Nárnia", ". C.S. Lewis", 1950);
const livro2 = new Livro("2", "Coraline", " Neil Gaiman", 2002);


//Emprestimo do primeiro livro
if (livro1.emprestar()) {
    console.log(` O livro ${livro1.titulo} foi emprestado.`);
} else{
    console.log(`O livro ${livro1.titulo} não está disponivel no momento.`);
}

//Emprestimo do mesmo livro novamente
if (livro1.emprestar()) {
    console.log(`O livro ${livro1.titulo} foi emprestado`);
} else {
    console.log(`O livro ${livro1.titulo} não está disponivel no momento`);
}

//chamando a função para devolver o livro emprestado
if (livro1.devolver()) {
    console.log(`O livro ${livro1.titulo} foi devolvido.`);
} else {
    console.log(`O livro ${livro1.titulo} está disponivel.`)
}

// Emprestar novamente
if (livro1.emprestar()) {
    console.log(` O livro ${livro1.titulo} foi emprestado novamente.`);
} else{
    console.log(`O livro ${livro1.titulo} não está disponivel.`);
}