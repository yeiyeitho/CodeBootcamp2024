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
● Descripción del programa: Crea una piramide invertida de letras
-------------------------------------------------- */



for (let p = 13, spaces = 0; p >= 1; p -= 2, spaces++){
    process.stdout.write(" ".repeat(spaces)); // Imprime espacios
    process.stdout.write("P".repeat(p)); // Imprime la letra 'p' p veces
    process.stdout.write(" ".repeat(spaces)); // Imprime espacios
    process.stdout.write("\n"); // Salto de linea
}