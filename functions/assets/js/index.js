// function retorno(num1, num2) {
//     let num;
//     if (num1 >= num2) {
//          num= num1;
//         return console.log(`O maior numero entre ${num1} e ${num2} é: ${num}`);
//     }else {
//         num = num2;
//         return console.log(`O maior numero entre ${num1} e ${num2} é: ${num}`);
//     }
    

// }


// melhorando a função
//execultando o mesmo codigo so que em uma condição ternaria
// retornando se num2 for maior que num1 retorne num2 se não retorne num1.
const  max = (num2, num1) => num2 > num1 ? num2 : num1;
console.log(max(500, 2455));