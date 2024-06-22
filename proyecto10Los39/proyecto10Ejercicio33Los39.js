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
● Descripción del programa: Calcula por medio de series de taylor la función Ln de x
-------------------------------------------------- */


// Creamos la terminal para escribir y recibir datos de ella
const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

// Funcion para calcular Ln
const calcularLn = (nTerminos, xValor) => {
    let sum = 0;
    for (let i = 1; i <= nTerminos; i++) {
        let term = ((xValor - 1) ** i) / i;
        if (i % 2 === 0) {
            term = -term; // Alterna el signo para términos pares
        }
        sum += term;
    }
    return sum;
}

rl.question("Ingrese el valor de x: ", (x) => { 
    rl.question("Ingrese el numero de terminos: ", (terminos) => 
        { sum = calcularLn(terminos, x); console.log(`Con ${terminos} términos, cosh(${x}) = ${sum}`);rl.close()}) });


