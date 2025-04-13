/**
    1 - Módulo de calculadora
    2 - Módulo de par ou ímpar
    3 - Módulo de detecção de palíndromo
 */

var calculator = require("./calculator");
var palindromo = require("./palindromo");

console.log(calculator.multiplication(12, 15));

console.log(calculator.evenOrOdd(23));

console.log(palindromo.detectPalindromo("Ana"));
