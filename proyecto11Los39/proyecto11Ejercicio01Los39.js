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
● Descripción del programa: Imprime la serie de Fibonnaci sin sobrepasar el numero 10,000
-------------------------------------------------- */

//Imprimimos el mensaje de inicio del programa
console.log(`Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va
sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......
Para este programa, se presentará la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.`);
    
let number1 = 0;
let number2 = 1;
let k = 0;

while (k < 10000) {
    process.stdout.write(number1 + ', '); // Se imprime el número del término actual y ponemos una coma y un espacio
    k = number2;
    number2 = number2 + number1;
    number1 = k;
}