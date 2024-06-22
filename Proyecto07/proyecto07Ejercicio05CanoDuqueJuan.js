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
- Descripcion: El programa recibe cantidad de horas y minutos y calcula la cantidad de minutos totales
*/

const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input, output});

console.log("Salida por pantalla:\n");
rl.question("Por fvor digite la cantidad de horas: ", 
    (hours) => { //hours guarda la cantidad de horas ingresadas
        rl.question("Por favor digite la cantidad de minutos: ", 
            (minutes) => { //minutes guarda la cantidad de minutos ingresados 
                let result = (hours * 60) + Number(minutes); //result guarda la conversión a solo minutos
                console.log(`\n${hours} horas y ${minutes} minutos equivalen a ${result} minutos.`); rl.close();
            }
        )
    }
);