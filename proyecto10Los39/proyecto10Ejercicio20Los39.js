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
● Descripción del programa: Crea un patron de letras en pantalla
-------------------------------------------------- */


for (let a = 0, spaces = 79; a < 25; a++, spaces--){
    process.stdout.write(" ".repeat(spaces)); // Imprime los espacios del principio
    process.stdout.write("A".repeat(a)); // Imprime la letra 'A'
    process.stdout.write("\n"); // Salto de linea
}