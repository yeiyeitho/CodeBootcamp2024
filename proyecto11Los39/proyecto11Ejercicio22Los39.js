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


let p = 13, spaces = 33;
while (p >= 1) {
    process.stdout.write(" ".repeat(spaces)); // Imprime los espacios del principio
    process.stdout.write("P".repeat(p)); // Imprime la letra
    process.stdout.write(" ".repeat(spaces)); // Imprime los espacios siguientes
    process.stdout.write("\n"); // Salto de linea
    
    p -= 2;
    spaces++;
}