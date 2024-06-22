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
- Descripcion: El programa recibe velocidad en mph y lo convierte a m/s
SALVEDAD: el contrato dice que con input 60 el resultado es 16.82, pero esto es erroneos. Ya que el resultado es 26.82 (redondeando)
*/

const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input, output});

console.log("Salida por pantalla:\n");
rl.question("Por favor digite la cantidad de mph que desea convertir a m/s: ", 
    (miles) => { //miles guarda el dato de mph ingresados por consola
        console.log(`\n${miles} mph equivalen a ${miles/2.237} m/s`); rl.close();
    }
);