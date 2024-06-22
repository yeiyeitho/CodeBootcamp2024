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
● Descripción del programa: Imprime un reloj invertido
-------------------------------------------------- */


// Definición de función 'imprimir' que crea una línea con el caracter 'carac' repetido 'times' veces
const imprimir = (carac, times) => {
    let line = "";
    for (let i = 0; i < times; i++) {
        line += carac;
    }
    return line;
}

// Función 'recursividadArriba' que imprime la parte superior de la figura
const recursividadArriba = (n, times, esp) => {
    for (let i = 0; i < n; i++) {
        let line = imprimir("A", times); // Añade las "A"
        let line2 = line + imprimir(" ", esp); // Añade los espacios
        let line3 = line2 + imprimir("A", times); // Añade las "A" del final
        console.log(imprimir(" ", 27)+line3); // Muestra la línea
        times++;
        esp -= 2; // Reduce el número de espacios para la siguiente línea
    }
    console.log(imprimir(" ", 27)+imprimir("A", (times - 1) * 2 + 1)); // Muestra la línea de la mitad
}

// Función 'recursividadAbajo' que imprime la parte inferior de la figura
const recursividadAbajo = (n, times, esp) => {
    for (let i = 0; i < n; i++) {
        let line = imprimir("A", times); // Añade las "A"
        let line2 = line + imprimir(" ", esp); // Añade los espacios
        let line3 = line2 + imprimir("A", times); // Añade las "A" del final
        console.log(imprimir(" ", 27)+line3); // Muestra la línea
        times--;
        esp += 2; // Aumenta el número de espacios para la siguiente línea
    }
}

// Función 'show' que muestra la figura completa
const show = (n) => {
    recursividadArriba(Math.floor(n / 2), 1, n - 2); // Primera mitad de la figura
    recursividadAbajo(Math.floor(n / 2), Math.floor(n / 2), 1); // Segunda mitad de la figura
}

// Ejemplo de uso: muestra una figura con n = 7
show(7);