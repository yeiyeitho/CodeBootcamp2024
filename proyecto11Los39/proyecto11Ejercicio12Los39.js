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
● Descripción del programa: Imprime un numero digitado por el usuario al reves
-------------------------------------------------- */


// Importamos el módulo readline-sync para leer la entrada del usuario desde la consola
const readline = require('readline-sync');

// Mostramos un mensaje de bienvenida al usuario sobre la funcionalidad del programa
console.log("Este programa lee desde el teclado un numero entero y lo imprime al revés.");

// Pedimos al usuario que ingrese un número entero y almacenamos la entrada en la variable 'input'
let input = readline.question("Entre el numero: ");

// Iteramos sobre cada carácter del número ingresado en orden inverso y lo imprimimos
let i = input.length - 1;
while (i >= 0) {
    process.stdout.write(input[i]);
    i--;
}