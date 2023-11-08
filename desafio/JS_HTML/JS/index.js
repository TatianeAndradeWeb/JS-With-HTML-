import { Card } from "./card.js";
import { NavBar } from "./navbar.js";
const navBar = new NavBar();
navBar.crianavBar();
const Card = new Card();
navBar.crianavBar();

const produtos = [
 {
    nome : 'pizza de queijo',
    texto: 'essa é a melhor pizza de São Paulo',
    imagem: 'https://nextfoodcare.com.br/wp-content/uploads/2021/06/pizza-4-queijos.jpg',
 }

]

produtos.forEach(produto => {
    Card.criarCard(produto.imagem, produto.nome, produto.texto,)
})