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
● Descripción del programa: Imprime un patron numerico en pantalla
-------------------------------------------------- */


const tresCols = () => {
    let col1 = 1, col2 = 1, col3 = 1;
    let i = 1;
    while (i <= 9) {
        if (i % 3 === 0) {
            console.log(col1, col2, col3);
            col1++;
            col3 = 1;
            col2++;
        } else {
            console.log(col1, col2, col3);
            col1++;
            col3++;
        }
        i++;
    }
  }
  tresCols();