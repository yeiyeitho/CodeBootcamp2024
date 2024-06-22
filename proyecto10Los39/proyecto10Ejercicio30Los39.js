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
● Descripcion: Calcula por medio de series de taylor la función coseno de x
-------------------------------------------------- */

// prompt-sync: modulo que proporciona una manera de pedir valores por consola
const prompt = require('prompt-sync')(); // Función para pedir un valor al usuario

let VALOR_X = parseInt(prompt('Ingrese el valor de X: ')) // Valor de X
let numeroTerminos = parseInt(prompt('Ingrese el número de terminos de la serie: ')) // Número de términos de la serie

// Funcion factorial
const factorial = (number) => {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

// Función cosTaylor(iteraciones)
// Parametros: iteraciones: número entero
// Retorno: Suma de los n primeros términos de la serie de Taylor para el coseno de x.
// Descripción: Calcula la suma de los n primeros términos de la serie de Taylor para el
// coseno de x de manera recursiva.
let result = 0;
for (let m = 0; m < numeroTerminos; m++) {
    result+= (-1)**m * VALOR_X**(2*m) / factorial(2*m);
    };
    
// Se imprime el texto de resultado y las variables que usamos para calcular
console.log(`con (${numeroTerminos}) términos, cos(${VALOR_X}) = ${result}`);
