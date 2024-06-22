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
    for (let numero1 = 1; numero1 <= 10; numero1++) {
        // los números 1 y 2 irán desde el 1 al 10, incrementando en uno al final de cada iteración.
        console.log(`\nTabla del ${numero1}\n`); // número1 será el número que se multiplica por los numeros del 1 al 10.
        for (let numero2 = 1; numero2 <= 10; numero2++) {
            //Este número itera por cada tabla hasta el 10
            console.log(`${numero1} x ${numero2} = ${numero1 * numero2}`); //mostramos el resultado.
        }
    }
}
tablasMultiplicar();