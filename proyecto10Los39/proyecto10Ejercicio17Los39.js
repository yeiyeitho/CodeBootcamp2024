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

// Inicialización del bucle 'for' con dos variables: i inicializada en 0 y n inicializada en 0.
// El bucle se ejecuta mientras i sea menor o igual a 9.
for (let i = 0, n = 0; i <= 9; i++) {
    // Primer condicional: imprime i y 1 si i es igual a 0, luego incrementa i y n.
    if (i === 0) {
        console.log(i, 1);
        i++; // Incrementa i en 1
        n++; // Incrementa n en 1
    }
    // Segundo condicional: imprime i y n si i es par, luego incrementa n.
    if (i % 2 === 0) {
        n++; // Incrementa n en 1
        console.log(i, n);
    } else {
        // En caso contrario (i es impar): imprime i y n sin modificar n.
        console.log(i, n);
    }
}