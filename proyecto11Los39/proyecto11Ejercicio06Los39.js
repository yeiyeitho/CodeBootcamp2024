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
● Descripción del programa: Calcula la Serie de Padovan hasta n terminos digitados por el usuario
-------------------------------------------------- */


// Creamos la interfaz para acceder a la terminal y escribir y recibir datos de ella 
const readline = require("node:readline");
const { stdin : input, stdout : output } = require("node:process");
const rl = readline.createInterface({input, output});

// Pedimos el dato, lo guardamos en X
rl.question("Numero de terminos deseado: ", (x) => {
    let limite = parseInt(x); // Convertimos el valor a entero

    let number1 = 1;
    let number2 = 0;
    let number3 = 0;
    let contador = 0;
    
    while (contador < limite) {
        process.stdout.write(number1 + ', '); // Imprime el número del término actual y ponemos una coma y un espacio
    
        let siguiente = number1 + number2; // Calculamos el siguiente número de la sucesión
    
        // Intercambiamos los valores: el número 1 pasa a ser el 2, el 2 pasa a ser el 3, y el 3 pasa a ser el siguiente de la sucesión
        number1 = number2;
        number2 = number3;
        number3 = siguiente;
    
        contador++; // Incrementamos el contador
    }
    rl.close();
});
