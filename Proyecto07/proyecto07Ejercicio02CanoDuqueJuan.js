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
- Descripcion: El programa recibe el valor del radio de la esfera y calcula su volimen
*/

const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input, output});

console.log("Salida por pantalla:\n");
rl.question("Por favor digite el radio de la esfera: ", 
    (radius) => { //radius guarda el radio de la esfera ingresado
        let result = (radius ** 3) * 4/3 * 3.1415926; //result guarda el resultado del volumen hallado
        console.log(`\nEl volumen de una esfera de radio ${radius} es de ${result}`); rl.close();
    }
);