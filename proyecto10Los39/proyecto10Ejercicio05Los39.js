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

    // Calculamos la serie de Perrin con el primer, segundo y ultimo numero
    for (let number1 = 3, number2 = 0, number3 = 2, contador = 0; contador < limite; contador++) {
        process.stdout.write(number1 + ', ');
    
        let nextNumber = number1 + number2; // Calculamos el siguiente numero de la sucesión
        number1 = number2; // Intercambiamos los numeros
        number2 = number3;
        number3 = nextNumber; // El numero 3 será el siguiente numero de la sucesión
    };
    rl.close();
});
