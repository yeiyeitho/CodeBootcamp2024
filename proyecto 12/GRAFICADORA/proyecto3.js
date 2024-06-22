const prompt = require('prompt-sync')();

// Función para leer la función polinómica y extraer coeficientes y potencias
function leerFuncionPolinomica(cadenasString) {
    // Divide la cadena en términos usando una expresión regular
    let terms = cadenasString.match(/[+-]?(\d+)?(X(\d+)?|X\((-?\d+)\))*/g).filter(term => term !== '');
    
    // Crea un arreglo para almacenar los coeficientes y potencias
    let funcionPolinomica = [];

    for (let term of terms) {
        // Usa una expresión regular para extraer el coeficiente y la potencia
        let match = term.match(/([+-]?\d*)?(X(\d+)?|X\((-?\d+)\))?/);
        let coefficient = parseInt(match[1] || (match[1] === '' ? 1 : match[1])); // Coeficiente del término
        let power = match[3] ? parseInt(match[3]) : (match[4] ? parseInt(match[4]) : (match[2] ? 1 : 0)); // Potencia del término
        
        funcionPolinomica.push([coefficient, power]); // Almacena el coeficiente y la potencia en el arreglo
    }

    return funcionPolinomica; // Retorna el arreglo de coeficientes y potencias
}

// Función para calcular f(x) dado un valor de x y la función polinómica
function calcularFuncionPolinomica(x, coefficientsMatrix) {
    let y = 0;
    for (let term of coefficientsMatrix) {
        y += term[0] * Math.pow(x, term[1]);
    }
    return y;
}

// Función para imprimir la tabla de valores
function imprimirTablaValores(tablaValores) {
    console.log("\nTabla de valores:");
    console.log("x  | f(x)");
    for (let row of tablaValores) {
        console.log(`${row[0]} | ${row[1]}`);
    }
}

// Función para graficar el polinomio en modo texto en una pantalla de 24x80
function Plot(xMin, xMax, inc, func) {
    const width = 80;
    const height = 24;

    // Obtener los valores de x en el rango especificado
    let Xs = Range(xMin, xMax, inc);
    
    // Escalas para mapear los valores de x e y a las dimensiones de la pantalla
    let xRange = Math.abs(xMin - xMax);
    let xScale = width / xRange;
    
    // Calcular los valores de y correspondientes a los valores de x
    let Ys = Xs.map(func);
    
    // Obtener los límites de los valores de y
    let yMin = Math.min(...Ys);
    let yMax = Math.max(...Ys);
    let yRange = Math.abs(yMin - yMax);
    let yScale = height / yRange;
    
    // Posiciones de los ejes en la pantalla
    let xAxis = Math.round(-yMin * yScale);
    let yAxis = Math.round(-xMin * xScale);
    
    // Generar la cadena para dibujar la gráfica
    let graphString = '';

    for (let y = height - 1; y >= 0; y--) {
        for (let x = 0; x < width; x++) {
            if (y === xAxis) {
                graphString += '-';
            } else if (x === yAxis) {
                graphString += '|';
            } else if (Xs.includes((x - yAxis) / xScale)) {
                let index = Xs.indexOf((x - yAxis) / xScale);
                if (Math.round(Ys[index] * yScale) === y) {
                    graphString += 'x';
                } else {
                    graphString += ' ';
                }
            } else {
                graphString += ' ';
            }
        }
        graphString += '\n';
    }

    return graphString;
}

// Función para generar un rango de valores
function Range(min, max, inc) {
    let result = [];
    for (let i = min; i <= max; i += inc) {
        result.push(i);
    }
    return result;
}

// Preguntar al usuario por la función polinómica
let cadenasString = prompt('Introduce una función polinómica: ');

// Mostrar la función polinómica ingresada por el usuario   
console.log(`La función polinómica ingresada es: ${cadenasString}`);

// Parsear la cadena y obtener el arreglo bidimensional de coeficientes y potencias
let coefficientsMatrix = leerFuncionPolinomica(cadenasString);

// Leer desde el teclado el rango inicial y final
let rangoInicial = parseInt(prompt('Introduce el rango inicial: '));
let rangoFinal = parseInt(prompt('Introduce el rango final: '));

// Leer desde el teclado el intervalo para la tabla de valores y la gráfica
let intervalo = parseInt(prompt('Introduce el intervalo para la tabla de valores y la gráfica: '));

// Construir la tabla de valores de la función polinómica para cada valor de x en el rango y el intervalo entregado por el usuario
let tablaValores = [];
for (let x = rangoInicial; x <= rangoFinal; x += intervalo) {
    let y = calcularFuncionPolinomica(x, coefficientsMatrix);
    tablaValores.push([x, y]);
}

// Mostrar la tabla de valores
imprimirTablaValores(tablaValores);

// Obtener la representación gráfica del polinomio en forma de cadena
let graphString = Plot(rangoInicial, rangoFinal, intervalo, (x) => calcularFuncionPolinomica(x, coefficientsMatrix));

// Mostrar la representación gráfica del polinomio
console.log("\nGráfico del polinomio:");
console.log(graphString);
