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
- Descripcion: El programa recibe 2 números y realiza las 4 operaciones básicas
*/

const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input, output});

console.log("Salida por pantalla:\n");
rl.question("Por fvor digite el primer numero: ", 
    (number1) => { //number1 guarda el primer número ingresado por consola
        rl.question("Por favor digite el segundo numero: ", 
            (number2) => { //number2 guarda el segundo número ingresado por consola
                console.log(`\nSuma: ${Number(number1) + Number(number2)}
Resta: ${number1 - number2} \nMultiplicacion: ${number1 * number2} 
Division: ${number1 / number2}`); rl.close();
            }
        )
    }
);