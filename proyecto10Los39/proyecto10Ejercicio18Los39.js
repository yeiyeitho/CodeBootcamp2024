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
    let col1 = 1; //Definimos tres variables para almacenar los valores de cada columna
    let col2 = 1;
    let col3 = 1;
    for (let i = 1; i <= 9; i++) { //Bucle for para la cantidad de filas
      if (i % 3 == 0) {//miramos si es la col 3 o 6, ya que cambian los datos de col2 y col3
        console.log(col1, col2, col3);
        col1++; //si es así, col1 se suma en uno
        col3 = 1 //empezamos nuevamente en 1 col3
        col2++; //col2 se suma en uno
      } else {
        console.log(col1, col2, col3);
        col1++ //si no es así, col1 se suma en uno por igual
        col3++//sumanos col3 en uno para mostrar los numeros 1,2,3 
        //col2 no se modifica porque cambia cada tres impresiones en pantalla
      }
    }
  }
  tresCols();