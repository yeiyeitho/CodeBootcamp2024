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
- Descripcion: El programa recibe grados celcius por pantalla y devuelve grados Fharenheit
*/

const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input, output});

console.log("Salida por pantalla:\n");
rl.question("Por favor digite los centigrados a convertir a Fahrenheit: ", 
    (celcius) => { //celcius guarda los grados celcius ingresados por pantalla
        let fahrenheit = (celcius * 9/5) + 32.; //fahrenheit se usa para guardar el resultado de la conversión.
        console.log(`\n${celcius}°C son ${fahrenheit} grados Fahrenheit`); rl.close();
    }
);