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
● Descripcion: Calcula por medio de series de taylor la función senh de x
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

// Funcion para calcular senh
const calcularSenh = (nTerminos, xValor) => {
    let sum = 0;
    for (let i = 0, expt = 1; i < nTerminos; i++, expt += 2) {
        sum += xValor ** expt / factorial(expt);
    }
    return sum
}


rl.question("Ingrese el valor de x: ", (x) => { 
    rl.question("Ingrese el numero de terminos: ", (terminos) => 
        { sum = calcularSenh(terminos, x); console.log(`Con ${terminos} términos, senh(${x}) = ${sum}`);rl.close()}) });



