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
● Descripción del programa: 
-------------------------------------------------- */


// Creamos la interfaz para acceder a la terminal y escribir y recibir datos de ella 
const readline = require("node:readline");
const { stdin : input, stdout : output } = require("node:process");
const rl = readline.createInterface({input, output});

// Función factorial para calcular el factorial de un número
const factorial = (number) => {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}


rl.question("Numero de terminos deseado: ", (x) => {
    let limite = parseInt(x);
    // Inicializamos los primeros tres términos de la serie de Catalan
    let number1 = 1, number2 = 1, number3 = 0;

    // Mostramos los primeros dos términos (1 y 1)
    process.stdout.write(number1 + ', ');
    process.stdout.write(number2+ ', ');

    // Calculamos y mostramos los términos siguientes
    for (let contador = 2; contador < limite; contador++) {
        let siguiente = factorial(2 * contador) / (factorial(contador) * factorial(contador + 1));
        number3 = siguiente;
        process.stdout.write(number3 + ', ');
        
        // Rotamos los valores para el siguiente cálculo
        number1 = number2;
        number2 = number3;
    }

    rl.close();
});
