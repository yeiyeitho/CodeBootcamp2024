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
● Descripción del programa: Calcula la Serie de Perrin hasta n terminos digitados por el usuario
-------------------------------------------------- */


// Creamos la interfaz para acceder a la terminal y escribir y recibir datos de ella 
const readline = require("node:readline");
const { stdin : input, stdout : output } = require("node:process");
const rl = readline.createInterface({input, output});

// Pedimos el dato, lo guardamos en X
rl.question("Numero de terminos deseado: ", (x) => {

    let limite = parseInt(x); // Convertimos el dato a un entero y lo guardamos como el limite

    let number1 = 3;
    let number2 = 0;
    let number3 = 2;
    let contador = 0;
    
    while (contador < limite) {
        process.stdout.write(number1 + ', '); // Imprime el número del término actual y ponemos una coma y un espacio
        
        let nextNumber = number1 + number2; // Calculamos el siguiente número de la sucesión
        number1 = number2; // Intercambiamos los números
        number2 = number3;
        number3 = nextNumber; // El número 3 será el siguiente número de la sucesión
        
        contador++; // Incrementamos el contador
    }
    rl.close();
});
