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
● Descripción del programa: Calcula la Serie Triangular hasta n terminos digitados por el usuario
-------------------------------------------------- */


// Creamos la interfaz para acceder a la terminal y escribir y recibir datos de ella 
const readline = require("node:readline");
const { stdin : input, stdout : output } = require("node:process");
const rl = readline.createInterface({input, output});

rl.question("Numero de terminos deseado: ", (x) => {
    let limite = parseInt(x);
    // Inicializamos los primeros dos términos de la serie triangular
    let T0 = 1; // T(0) = 1
    let T1 = 3; // T(1) = 3
    process.stdout.write(T0 + ', ');
    // Comenzamos desde el tercer término (T2)
    for (let n = 2; n <= limite; n++) {
        let Tn = (n * (n+1))/2; // T(n) = T(n-1) + n * T(n-2)

        process.stdout.write(Tn + ', ');

        // Actualizamos para el siguiente ciclo
        T0 = T1;
        T1 = Tn;
    }
    rl.close();
});
