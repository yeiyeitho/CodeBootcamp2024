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
- Descripcion: El programa recibe el ancho y alto de un rectangulo y calcula su perímetro
*/

const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input, output});

console.log("Salida por pantalla:\n");
rl.question("Por fvor digite el largo del rectangulo: ", 
    (length) => { //length guarda el largo del rectangulo
        rl.question("Por favor digite el ancho del rectangulo: ", 
            (width) => { //width guarda el ancho del rectangulo
                let perimeter = (length * 2) + (width * 2); //perimeter guarda el resultado del perimetro evaluado
                console.log(`\nEl perimetro de un rectangulo con largo ${length} y ancho ${width} es de ${perimeter}.`); rl.close();
            }
        )
    }
);