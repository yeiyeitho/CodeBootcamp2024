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
● Descripción del programa: Calcula la Serie de Bell hasta n terminos digitados por el usuario
-------------------------------------------------- */


const prompt = require('prompt-sync')();// se importa la libreria prompt-sync en una constante PromptSync

// Funcion factorial
const factorial = (number) => {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

const binominial = (n, i) => {//Es la operacion que se repite constantemente, es una funcion auxiliar para summationBell
    return (factorial(n - 1) / (factorial(i) * factorial((n - 1) - i)));//n es el maximo termino e i es el termino en el que va iterando
}

// Realiza la sumatoria de bell
const summationBell = (n, i, accumulator) => {
    for (let index = i; index < n; index++) {
        accumulator += binominial(n, index) * calculateTerm(index);
    }
    return accumulator;
}
const calculateTerm = (term) => {//funcion que ayuda a calcular los terminos
    if (term === 0 || term === 1) {//si es cero o uno, el termino será 1
        return 1;
    } else {//de lo contrario llama a la funcion que calcula propiamente los terminos
        return summationBell(term, 0, 0);
    }
}

// Imprime los terminos de bell
const printBell = (quantity) => {
    for (let i = 0; i <= quantity; i++) {
        process.stdout.write(calculateTerm(i) + (i < quantity ? ", " : "."));
    }
}

let quantityTerms = prompt ( "Ingrese el termino: ");
printBell(parseInt(quantityTerms) - 1);//llama a la funcion que imprime
