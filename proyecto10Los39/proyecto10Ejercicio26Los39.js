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
● Descripcion: Imprime una piramide invertida de z de altura 10 sin relleno
z                 z
 z               z
  z             z
   z           z
    z         z
     z       z
      z     z
       z   z
        z z
         z
-------------------------------------------------- */



const altura = 10;

/* El bucle for itera sobre cada fila de la pirámide invertida, desde la fila 10 hasta la fila 1. */
for (let fila = altura; fila >= 1; fila--) {
  let linea = ''; // Inicializa una cadena vacía llamada linea que almacenará la fila actual.

  // Crea un bucle que agrega espacios en blanco al principio de cada fila.
  // La cantidad de espacios aumenta a medida que avanzamos hacia las filas superiores de la pirámide.
  for (let i = 1; i <= altura - fila; i++) {
    linea += ' '; // Por cada iteración de este bucle, se agrega un espacio en blanco a linea.
  }

  // Borde izquierdo
  linea += 'z';

  // Medio
  // Crea un bucle que agrega espacios en blanco en el medio de la parte visible de la pirámide.
  // La cantidad de espacios disminuye a medida que avanzamos hacia las filas superiores de la pirámide.
  for (let i = 1; i <= 2 * (fila - 1) - 1; i++) {
    linea += ' ';
  }

  // Borde derecho (si no es la última fila)
  if (fila > 1) {
    linea += 'z';
  }

  console.log(linea); // Imprime la fila construida
}