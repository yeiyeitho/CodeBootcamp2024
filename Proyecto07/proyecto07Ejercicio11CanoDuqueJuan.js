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
- Descripcion: El programa recibe horas, minutos y segundos y los conviert en milisegundos
*/

const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input, output});

console.log("Salida por pantalla:\n");
console.log("Por favor digite el numero de horas, minutos y segundos que desea convertir a milisegundos.\n");
rl.question("Digite horas: ", 
    (hours) => { //hours guarda el número de horas ingresadas por consola
        rl.question("Digite minutos: ", 
            (minutes) => { //minutes guarda el número de minutos ingresados por consola
                rl.question("Digite segundos: ", 
                    (seconds) => { //seconds guarda el número de segundos ingresados por consola
                        console.log("\nLa cantidad de milisegundos para " + hours + " horas, " + minutes + 
                            " minutos y " + seconds + " segundos es de " + 
                            ( (hours * 3600000) + (minutes * 60000) + (seconds * 1000) ) + " milisegundos"); rl.close();
                    }
                )
            }
        )
    }
);