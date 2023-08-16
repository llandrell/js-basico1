const h1 = document.querySelector('.container h1'); //selecionando pelo queryselect o container em html.

const data = new Date();



h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'}) ;
