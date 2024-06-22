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
- Descripcion: El programa recibe nombre, apellido y fecha de nacimiento y los devuelve en una sola linea
*/

const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input, output});

console.log("Salida por pantalla:\n");
rl.question("Por fvor digite su nombre: ", 
    (name) => { // name guarda el nombre ingresado por consola
        rl.question("Por favor digite su apellido: ", 
            (lastName) => { //lastName guarda el apellido ingresado por consola
                rl.question("Por favor digite su fecha de nacimiento: ", 
                    (dateOfBirth) => { //dateOfBirth guarda el año de nacimiento ingresado por consola
                        console.log("\n" + name + " " + lastName + " " + dateOfBirth); rl.close();
                    }
                )
            }
        )
    }
);