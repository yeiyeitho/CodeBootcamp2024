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
● Descripción del programa: Lee un numero entero y calcula la suma de sus factoriales
-------------------------------------------------- */

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

// Verifica si el número ingresado es negativo
if (input < 0) { 
    console.log("Numero invalido, menor que 0");
    return -1; // Sale del programa con un código de error
}

let sum = 0;
// Calcula la suma de los factoriales desde 0 hasta el número ingresado
for (let i = 0; i <= input; i++) {
    sum += factorial(i);
}

// Imprime la suma total de los factoriales calculados
console.log(sum);
