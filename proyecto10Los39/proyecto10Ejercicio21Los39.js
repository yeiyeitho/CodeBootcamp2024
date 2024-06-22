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
● Descripción del programa: Muestra una piramide invertida en orden alfabetico
-------------------------------------------------- */

const imprimir = (carac, times) => {
    //Función usada anteriormente para mostrar
    let line = "";
    for (let i = 0; i < times; i++) {
      line += carac;
    }
    process.stdout.write(line); // Muestra en la misma línea sin hacer el salto de línea
  };
  
  const piramide = (n, esp, ind) => {
    // toma la cantidad de espacios inicial y la cantidad de filas inicial, usamos el código ASCII para mostrar las respectivas letras
    let indnum = ind.charCodeAt(0); // definimos el índice ASCII
    for (let i = 0; i <= n; i += 2) {
      imprimir(" ", esp); // imprimimos los espacios
      imprimir(String.fromCharCode(indnum), n - i); // la cantidad de caracteres se disminuye en 2 cada vez, convertimos el índice ASCII a string para mostrarlo 
      esp += 1; // se suma en uno espacio
      indnum -= 2; // se resta en dos el índice ASCII
      process.stdout.write("\n"); // salta el renglón sin usar console.log
    }
  };
  
  piramide(13, 1, "P");