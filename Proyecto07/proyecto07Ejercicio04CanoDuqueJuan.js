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
- Descripcion: El programa recibe la velocidad en Km/h y lo devuelve en mph
*/

const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input, output});

console.log("Salida por pantalla:\n");
rl.question("Por favor digite Km/h requiere convertir a mph: ", 
    (kilometres) => { //kilometers guarda el dato de la vvelocidad en km/h ingresados
        let miles = kilometres/1.609; //miles guarda la conversión de velocidad a mph
        console.log(`\n${kilometres} KM/h equivalen a ${miles} mph.`); rl.close();
    }
);