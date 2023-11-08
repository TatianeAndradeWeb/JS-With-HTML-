export class Card{
    criarCard =(imagemdocard, textoCard) =>{
        const div = document.createElement('div');
        div.className = 'divCard';
        const imagem = document.createElement('img');
        imagem.src =imagemdocard;
        const titulo =document.createElement('h2');
        const texto = document.createElement('p');
        texto.innerText =textoCard;

        div.appendChild(imagem);
        div.appendChild(titulo);
        div.appendChild(texto);

        root.appendChild(div);


    }
}