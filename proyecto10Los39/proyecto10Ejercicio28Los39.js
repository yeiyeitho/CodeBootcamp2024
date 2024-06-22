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
● Descripcion: // El programa imrimirá una piramide rotada 90° usando espacios y letras A
---------------------------------------------- 
*/

// Función para imprimir un carácter dado un número específico de veces
const imprimir = (carac, times) => {
    let line = ""; // Inicializa una cadena vacía
    // Bucle para concatenar el carácter 'carac' tantas veces como se indique en 'times'
    for (let i = 0; i < times; i++) {
        line += carac;
    }
    process.stdout.write(line); // Imprime la línea resultante en la consola sin salto de línea
}

// Función principal para imprimir un patrón específico
let most = (n, sp) => {
    // Bucle para la primera mitad del patrón
    for (let i = 1; i <= n; i++){
        imprimir(" ", sp); // Imprime 'sp' espacios
        imprimir("A", i); // Imprime la letra 'A' 'i' veces
        console.log(" "); // Imprime un salto de línea
        sp--; // Decrementa el número de espacios
    }
    imprimir(" ", sp); // Imprime 'sp' espacios
    imprimir("A", n + 1); // Imprime 'A' 'n+1' veces
    console.log(""); // Imprime un salto de línea
    sp++; // Incrementa el número de espacios

    // Bucle para la segunda mitad del patrón
    for (let i = n; i >= 1; i--){
        imprimir(" ", sp); // Imprime 'sp' espacios
        imprimir("A", i); // Imprime la letra 'A' 'i' veces
        console.log(""); // Imprime un salto de línea
        sp++; // Incrementa el número de espacios
    }
}

// Llama a la función 'most' con 'n' igual a 5 y 'sp' igual a 40
most(5, 39);