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
    let i = 0;
    while (i < times) {
        line += carac;
        i++;
    }
    process.stdout.write(line); // Imprime la línea resultante en la consola sin salto de línea
}

// Función principal para imprimir un patrón específico
let most = (n, sp) => {
    // Bucle para la primera mitad del patrón
    let i = 1;
    while (i <= n) {
        imprimir(" ", sp); // Imprime 'sp' espacios
        imprimir("A", i); // Imprime la letra 'A' 'i' veces
        console.log(" "); // Imprime un salto de línea
        sp--; // Decrementa el número de espacios
        
        i++;
    }
    imprimir(" ", sp); // Imprime 'sp' espacios
    imprimir("A", n + 1); // Imprime 'A' 'n+1' veces
    console.log(""); // Imprime un salto de línea
    sp++; // Incrementa el número de espacios

    // Bucle para la segunda mitad del patrón
    let j = n;
    while (j >= 1) {
        imprimir(" ", sp); // Imprime 'sp' espacios
        imprimir("A", j); // Imprime la letra 'A' 'i' veces
        console.log(""); // Imprime un salto de línea
        sp++; // Incrementa el número de espacios
        
        j--;
    }
}

// Llama a la función 'most' con 'n' igual a 5 y 'sp' igual a 40
most(5, 39);