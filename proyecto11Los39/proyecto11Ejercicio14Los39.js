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
● Descripción del programa: Imprime las tablas de multiplicar del 1 al 10
-------------------------------------------------- */

const tablasMultiplicar = () => {
    let numero1 = 1;
    while (numero1 <= 10) {
        console.log(`\nTabla del ${numero1}\n`);
        let numero2 = 1;
        while (numero2 <= 10) {
            console.log(`${numero1} x ${numero2} = ${numero1 * numero2}`);
            numero2++;
        }
        numero1++;
    }
}
tablasMultiplicar();