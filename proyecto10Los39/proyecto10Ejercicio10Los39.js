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
● Descripción del programa: Calcula la Serie de Motzkin hasta n terminos digitados por el usuario
-------------------------------------------------- */


//Se usa para importar el paquete readline
const readline = require('readline-sync');
// Se define un objeto para guardar los valores de la función motzkin
const memo = {"1" : 1};

const motzkin = (n) => {
    // Si el término n de la serie ya fue calculado, lo usamos en vez de volver a calcular
    if (n in memo) {
        return memo[n];
    }

    // Los dos primeros términos de la serie de Motzkin
    if (n === 0 || n === 1) {
        return 1;
    }

    // Fórmula M(n) = M(n-1) + sumatoria(k=0,n-2) M(k) * M(n-2-k)
    let sumatoria = 0;
    for (let k = 0; k <= n - 2; k++) {
        sumatoria += motzkin(k) * motzkin(n - 2 - k);
    }

    // Se guardan los resultados en el objeto memo
    memo[n] = motzkin(n - 1) + sumatoria;
    return memo[n];
};

// Pedir al usuario que ingrese el número de términos
let input = readline.question("Ingresa el numero de terminos: ");
const n = parseInt(input);

motzkin(n-1)
process.stdout.write("1, ")
for (let key in memo) {
    process.stdout.write(`${memo[key]}, `);
}