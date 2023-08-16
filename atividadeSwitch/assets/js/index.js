
// criando uma função para  criar um  paragrafo
function criaP() {
    
    //criando elemento em JS, criando uma variavel para o paragrafo.
    
    const p = document.createElement('p');
    //retornando a variavel p que criou um elemento p.
    return p;
};




// criando uma função para imprimir na div Htmml o resultado da captura do formulario.
// recebendo o parametro mensagem (msg) para ser exibido na tela na div resultadoTela
function setResultado(msg) { 
    // criando uma const para capturar o resultado do formulario
    const resultado = document.querySelector('#resultadoTela');
    // enviado a mensagem pelo innerHTML limpando o hmtl.
   resultado.innerHTML = `ola Mundo!`;

 

    // criando uma variavel para receber a função criaP que cria um paragrafo

     const p = criaP();

   


    // colocando a mensagem dentro do p

    p.innerHTML = msg;

    // adicionando o paragrafo dentro de resultado
    resultado.appendChild(p);


};


//função para tornar os dias da semana em strings

function getWeekDayText(diaSemana) {
    let diaSemanaTex;
    switch (diaSemana) { // caso
        case 0:// caso dia da semana for 0, execulta codigo abaixo. // pode existir quantos cases forem necessarios
            diaSemanaTex = 'domingo';
            return diaSemanaTex; //caso o switch esteja dentro de uma função pode retornar algo no lugar do break 
        case 1:// caso dia da semana for 1, execulta codigo abaixo.
            diaSemanaTex = 'Segunda-feira';
            return diaSemanaTex; //caso o switch esteja dentro de uma função pode retornar algo no lugar do break ;
        case 2:// caso dia da semana for 0, execulta codigo abaixo.
            diaSemanaTex = 'Terça-feira';
            return diaSemanaTex; //caso o switch esteja dentro de uma função pode retornar algo no lugar do break 
        case 3:// caso dia da semana for 0, execulta codigo abaixo.
            diaSemanaTex = 'Quarta-feira';
            return diaSemanaTex; //caso o switch esteja dentro de uma função pode retornar algo no lugar do break 
        case 4:// caso dia da semana for 0, execulta codigo abaixo.
            diaSemanaTex = 'Quinta-feira';
            return diaSemanaTex; //caso o switch esteja dentro de uma função pode retornar algo no lugar do break 
        case 5:// caso dia da semana for 0, execulta codigo abaixo.
            diaSemanaTex = 'Sexta-feira';
            return diaSemanaTex; //caso o switch esteja dentro de uma função pode retornar algo no lugar do break 
        case 6:// caso dia da semana for 0, execulta codigo abaixo.
            diaSemanaTex = 'Sabado';
            return diaSemanaTex; //caso o switch esteja dentro de uma função pode retornar algo no lugar do break 
        default:// default é usado quando nem dos casos forem execultado / OBS: não e necessario o uso de break no default
            diaSemanaTex = 'Erro Dia da Semana';
            return diaSemanaTex;
    };
};


//função para tornar os meses em strings

function getWeekMonthText(mes) {
    let mesTex;
    switch (mes) { // caso
        case 0:
        mesTex = 'Janeiro';
            return mesTex; 
        case 1:
        mesTex = 'Fevereiro';
            return mesTex; 
        case 2:
        mesTex = 'Março';
            return mesTex; 
        case 3:
        mesTex = 'Abril';
            return mesTex; 
        case 4:
        mesTex = 'Maio';
            return mesTex; 
        case 5:
        mesTex = 'Junho';
            return mesTex; 
        case 6:
        mesTex = 'Julho';
            return mesTex; 
        case 7:
        mesTex = 'Agosto';
            return mesTex; 
        case 8:
        mesTex = 'Setembro';
            return mesTex; 
        case 9:
        mesTex = 'Outubro';
            return mesTex; 
        case 10:
        mesTex = 'Novembro';
            return mesTex; 
        case 11:
        mesTex = 'Dezembro';
            return mesTex; 

    };
};





// criando o objeto data e fazendo o get necessarios
const data = new Date();
const diaSemana = data.getDay();
const diaMes = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();

// chamando as funções que tranforma os numbers em strings
let mesText = getWeekMonthText(mes);
let diaSemanaTex = getWeekDayText(diaSemana);

// criando a varivael mensagem 

const msg1 = `${diaSemanaTex}, ${diaMes} de ${mesText} de ${ano}  ás: ${hora}:${min}.`;


setResultado(msg1);