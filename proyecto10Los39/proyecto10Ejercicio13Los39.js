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
● Descripción del programa: Recibe 75 numeros del usuario y hace calculos estadísticos en base a esos números
-------------------------------------------------- */


const readline = require('readline-sync');

// Variables para almacenar estadísticas de los números ingresados
let greaterThan150 = 0; // Contador de números mayores a 150
let bigNumber = -Infinity, smallNumber = Infinity; // Variables para el número más grande y más pequeño
let negativeNumbers = 0; // Contador de números negativos

// Iteramos 10 veces para ingresar 10 números desde la consola
for (let i = 0; i < 75; i++) {
    let input = parseInt(readline.question("Entre el número: ")); // Leemos y convertimos la entrada a número entero

    if (input == 0) continue; // Si el número ingresado es 0, continuamos con la siguiente iteración

    // Verificamos y actualizamos las estadísticas basadas en el número ingresado
    greaterThan150 += input > 150 ? 1 : 0; // Incrementamos el contador si el número es mayor que 150
    bigNumber = input > bigNumber ? input : bigNumber; // Actualizamos el número más grande encontrado
    smallNumber = input < smallNumber ? input : smallNumber; // Actualizamos el número más pequeño encontrado
    negativeNumbers += input < 0 ? 1 : 0; // Incrementamos el contador si el número es negativo
}

// Imprimimos los resultados de las estadísticas recopiladas
console.log("Cantidad de numeros mayores a 150:", greaterThan150);
console.log("Numero mayor encontrado en el grupo:", bigNumber);
console.log("Numero menor encontrado en el grupo:", smallNumber);
console.log("Cantidad de numeros negativos encontrados:", negativeNumbers);
console.log("Promedio de los positivos encontrados:", ((10 - negativeNumbers) / 10) * 100, "%");