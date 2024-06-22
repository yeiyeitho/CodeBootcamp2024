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
● Descripción del programa: Muestra la suma de los elementos de la serie de Fibonacci entre 0 y 100
-------------------------------------------------- */

let total = 0; // Variable usada para guardar la suma
console.log("Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100. Los números a sumar son:")

//Usamos for con number1 como el primer término, number2 como el segundo término y k como instancia temporal para intercambiar los valores de number2 y number1
for (number1 = 0, number2 = 1, k = 0; k < 100; k = number2, number2 = number2 + number1, number1 = k){
    process.stdout.write(number1 + ', '); //Se imprime el número del término actual y ponemos una coma y un espacio
    total += number1; // Usamos una variable para sumar el total
};

process.stdout.write("y su suma es: " + total);