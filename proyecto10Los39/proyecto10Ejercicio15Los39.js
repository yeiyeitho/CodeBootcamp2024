// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [14]
// - Hora: [10:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción: El programa pide imprime las tablas del 1 al 10 completas.*/

// Funcion factorial
const factorial = (number) => {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

const readline = require('readline-sync');

// Solicita al usuario que ingrese un número y lo convierte a entero
let input = parseInt(readline.question("Entre el numero: "));

console.log(factorial(input));
