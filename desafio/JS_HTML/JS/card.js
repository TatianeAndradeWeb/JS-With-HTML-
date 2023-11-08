export class Card{
    criarCard =() =>{
        const div = document.createElement('div');
        div.className = 'divCard';
        const imagem = Document.createElement('img');
        imagem.src =imagemdoCard;
        const titulo =document.createElement('h2');
        const texto = document.createElement('p');
        texto.innerText =textoCard;

        div.appendChild(imagem);
        div.appendChild(titulo);
        div.appendChild(texto);

        ShadowRoot.appendChild(div);
        

    }
}