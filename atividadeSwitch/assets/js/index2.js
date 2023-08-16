const h1 = document.querySelector('.container h1'); //selecionando pelo queryselect o container em html.

const data = new Date();


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

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function creatDate(data) {
    const diaSemana = data.getDay();
    const numMes = data.getMonth();
    const nomeDia = getWeekDayText(diaSemana);
    const nomeMes = getWeekMonthText(numMes);


    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()}` +
        ` ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
    );
};

h1.innerHTML = creatDate(data);