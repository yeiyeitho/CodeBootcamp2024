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
● Descripción del programa: Calcula la Serie de Narayana hasta n terminos digitados por el usuario
-------------------------------------------------- */


// Creamos la interfaz para acceder a la terminal y escribir y recibir datos de ella 
const readline = require("node:readline");
const { stdin : input, stdout : output } = require("node:process");
const rl = readline.createInterface({input, output});

// Pedimos el dato, lo guardamos en X
rl.question("Numero de terminos deseado: ", (x) => {
    let limite = parseInt(x); // Convertimos el valor a un entero
 
    let narayana = [1, 1, 1]; // Los primeros tres términos de la serie de Narayana

    for (let contador = 3; contador < limite; contador++) {
        let siguiente = narayana[contador - 1] + narayana[contador - 3]; // Fórmula correcta para la serie de Narayana
        narayana.push(siguiente); // Agrega el siguiente término a la serie
    }

    // Imprime los términos de la serie de Narayana hasta el límite especificado
    console.log(narayana.slice(0, limite).join(', '));
    rl.close();
});
