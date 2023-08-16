
// criando um array [] que contem objetos{}
const elementos = [
    // criando objeotos com a tag: e textos.
    { tag: 'p', texto: 'Qualquer Texto' },
    { tag: 'div', texto: 'frase div' },
    { tag: 'section', texto: 'frase section' },
    { tag: 'footer', texto: 'frase footer' },
    
];
    
//criando uma constante com o nome cotainer selecionando um elemento com o nome container, aprimera classe com esse nome container
const container = document.querySelector('.container');

// usando a api do dom crie esse elemento 'div'  // OBS: ainda não e filho de ngm
// o elemento está salvo na variavel  diver
const diver = document.createElement('div');

//criando um for para percorer o array elementos
for (let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    // criando uma variavel para receber o create elemente pegando as tags dos objetos dentro do array elementos
    let tagElemento = document.createElement(tag);
    //colocando texto dentro da tagElemento pelo inner text recebendo testo do array
    tagElemento.innerText = texto;
    // diver criada fora do for que cria o elemento div passando pelo appenchild a tagElemento
    diver.appendChild(tagElemento);
}

//selecionando o container e adicionando a div
container.appendChild(diver);
