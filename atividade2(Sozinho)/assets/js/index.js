const formulario = document.querySelector('#formulario'); //chamando o formulario para fazer o evento preventsedault

const peso = document.querySelector("#peso"); // pegando o valor do formulario peso

const altura = document.querySelector("#altura"); // pegando o valor do formulario peso


let digTela = document.querySelector("#DigTela"); // fazendo uma query na div digTela para digitar dentro do html

// parando um evento do formulario com o evento submit
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // chamando a função anonima para fazer o event default

    let peso1 = parseFloat(peso.value); // transformando o valor da variavel peso em numero float
    let altura1 = parseFloat(altura.value);    // transformando o valor da variavel altura em numero float
    let imc = peso1 / (altura1 * altura1); // fazendo o calculo de imc com as variaves em float
    imc = imc.toFixed(1);// arredondano o valor de imc em 2 casa 

    // criando as condições de imc

    if (imc < 18.5) {
       
        digTela.innerHTML = `<p> Seu imc é ${imc}</p> <p>Você está na situação de Magreza</p>`;
    }else if (imc >= 18.5 && imc <= 24.9){
       
        digTela.innerHTML = `<p> Seu imc é ${imc}</p> <p>Você está no peso normal</p>`;
    }else if (imc >= 25 && imc <= 29.9){
        
        digTela.innerHTML = `<p> Seu imc é ${imc}</p>  <p>Você está com Sobrepeso</p>`;
    }else if (imc >= 30 && imc <= 34.9){
        
        digTela.innerHTML = `<p> Seu imc é ${imc}</p> <p>Você está com Obesidade grau I</p>`;
    }else if (imc >= 35 && imc <= 40){
        
        digTela.innerHTML = `<p> Seu imc é ${imc}</p> <p>Você está com Obesidade grau II</p>`;
    }else if (imc > 40){
       
        digTela.innerHTML = `<p> Seu imc é ${imc}</p>  <p>Você está com Obesidade grau III</p>`;
    }else {
       
        digTela.innerHTML = ` Algo deu errado, tente novamente.</p>`;
    }

    
    

   
        
});


