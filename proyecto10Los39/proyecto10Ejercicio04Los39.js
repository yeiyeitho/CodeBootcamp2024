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
● Descripción del programa: Calcula la Serie de Pell hasta n terminos digitados por el usuario
-------------------------------------------------- */


// Creamos la interfaz para acceder a la terminal y escribir y recibir datos de ella 
const readline = require("node:readline");
const { stdin : input, stdout : output } = require("node:process");
const rl = readline.createInterface({input, output});

// Pedimos el dato, lo guardamos en X
rl.question("Numero de terminos deseado: ", (x) => {

    let limite = parseInt(x); // Convertimos el dato a un entero y lo guardamos como limite

    // Bucle para calcular la serie de Pell, usamos los primeros numeros y usamos 'k' para guardar temporalmente un numero, y contador para detener el numero
    for (number1 = 0, number2 = 1, k = 0, contador = 0; contador < limite; k = 2 * number2 + number1, number1 = number2, number2 = k, contador += 1){
        process.stdout.write(number1 + ', ');
    };
    rl.close();
});
