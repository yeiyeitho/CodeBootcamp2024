/* 
-18/06/2024
-10:16 pm
-Versión del coódigo: 1
-Ing(c): Juan Fernando Cano Duque
- JavaScript
- Versión: ECMASCRIPT 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- 4to Coding Bootcamp
- Descripcion: El programa recibe minutos y devuelve su conversion a minutos y horas
*/

const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input, output});

console.log("Salida por pantalla:\n");
rl.question("Por favor digite la cantidad de minutos: ", 
    (minutes) => { // minutes guarda la cantidad de minutos ingresados 
        console.log(`\n${minutes} minutos equivalen a ${Math.floor(minutes/60)} horas y ${minutes%60} minutos.`); rl.close();
    }
);