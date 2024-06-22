/* --------------------------------------------------
● Fecha y Hora de publicación: [19/06/2024]
● Versión de su código: [1]
● Autores: [Todos los ingenieros del Bootcamp () ]
● Nombre del lenguaje utilizado: [JavaScript]
● Versión del lenguaje utilizado: [ECMAScript 6]
● Universidad Tecnológica de Pereira
● Programa de Ingeniería de Sistemas y Computación
● Cuarta (IV) cohorte Coding BootCamp FullStack
-------------------------------------------------- */

/* --------------------------------------------------
● Descripción del programa: Calcula por medio de series de taylor la función coshs de x
-------------------------------------------------- */


// Funcion factorial
const factorial = (number) => {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

// Creamos la terminal para recibir y poner datos en ella
const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

// Funcion para calcular cosh
const calcularCosh = (nTerminos, xValor) => {
    let sum = 0;
    for (let i = 0; i < nTerminos; i += 2) {
        sum += xValor ** i / factorial(i);
    }
    return sum
}

rl.question("Ingrese el valor de x: ", (x) => { 
    rl.question("Ingrese el numero de terminos: ", (terminos) => 
        { sum = calcularCosh(terminos, x); console.log(`Con ${terminos} términos, cosh(${x}) = ${sum}`); rl.close()}) });

