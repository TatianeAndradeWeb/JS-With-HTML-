export class NavBar{
    //criamos uma função que criara uma navBar
    crianavBar= () => {

        const navBar = document.createElement('nav');

        const div = document.createElement('div');
        const iconsfavorite = document.createElement('img');
        const iconsPerson = document.createElement('img');

        iconsfavorite.src = "https://anagiovanna.com.br/blog/wp-content/uploads/2020/11/molde-coracao-imprimir-pintar.jpg"
        iconsPerson.src= "https://img.freepik.com/vetores-premium/vetor-de-ilustracao-de-pagina-para-colorir-de-desenho-animado-de-gato-bonito-para-livro-de-colorir-para-criancas_777568-149.jpg"
        iconsfavorite.className = 'icons';
        iconsPerson.className = 'icons';

        
        
        div.appendChild(iconsfavorite);
        div.appendChild(iconsPerson);

        navBar.appendChild(div);

        root.appendChild(navBar);

        //criar uma div que representa o nosso modal
        const divmodal =document.createElement('div');
        divmodal.classname ='modal';
        divmodal.style.display = 'none';

        iconsfavorite
        iconsfavorite.onclick=()=> {

            if(divmodal.style.display === 'block'){
                divmodal.style.display = 'none';
            }else{

                divmodal.style.display = 'block';

            }
            }
        }



    }



