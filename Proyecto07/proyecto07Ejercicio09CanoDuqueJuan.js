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
- Descripcion: El programa recibe 2 angulos de un triangulo y calcula el angulo faltante de dicho triangulo
*/

const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input, output});

console.log("Salida por pantalla:\n");
rl.question("Por fvor digite el valor del primer angulo: ", 
    (angle1) => { //angle1 es el primer ángulo ingresado por consola
        rl.question("Por favor digite el valor del segundo angulo: ", 
            (angle2) => { //angle2 es el segundo ángulo ingresado por consola
                console.log("\n" + "El valor del tercer angulo de un triangulo con angulos de "
                    + angle1 + " y " + angle2 + " es de " + (180 - angle1 - angle2) + "."
                ); rl.close();
            }
        )
    }
);