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
● Descripcion: Calcula por medio de series de taylor euler a la x
-------------------------------------------------- */

// Función 'factorial' que calcula el factorial de un número 'n' utilizando recursión.
const factorial = (number) => {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}
const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

// Función 'calcularTaylor' que calcula la aproximación de e^x utilizando la serie de Taylor con 'nTerminos' términos y 'xValor' como argumentos.
const calcularTaylor = (nTerminos, xValor) => {
    let sum = 0;
    // Itera 'nTerminos' veces para calcular la suma de la serie de Taylor.
    for (let i = 0; i < nTerminos; i++) {
        // Calcula cada término de la serie de Taylor y lo suma a 'sum'.
        sum += xValor ** i / factorial(i);
    }
    return sum; // Devuelve la suma total, que es la aproximación de e^x con 'nTerminos' términos.
}

// Interfaz de línea de comandos para solicitar al usuario dos valores: x y número de términos.
rl.question("Ingrese el valor de x: ", (x) => {
    rl.question("Ingrese el numero de terminos: ", (terminos) => {
        // Llama a la función 'calcularTaylor' para calcular la aproximación de e^x con 'terminos' términos.
        let sum = calcularTaylor(terminos, x);
        console.log(`Con ${terminos} términos, e^(${x}) = ${sum}`);
        rl.close(); // Cierra la interfaz de readline cuando se completan las preguntas.
    });
});


