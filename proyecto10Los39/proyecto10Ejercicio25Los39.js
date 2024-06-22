/* --------------------------------------------------
● Fecha y Hora de publicación: [19/06/2024]
● Versión de su código: [1]
● Autores: [Todos los ingenieros del Bootcamp () ]
● Nombre del lenguaje utilizado: [JavaScript]
● Versión del lenguaje utilizado: [ECMAScript 6]
● Universidad Tecnológica de Pereira
● Programa de Ingeniería de Sistemas y Computación
● Cuarta (IV) cohorte Coding BootCamp FullStack
-------------------------------------------------- */

/* --------------------------------------------------
● Descripción del programa: Imprime un rombo de letras
-------------------------------------------------- */

const imprimir = (carac, times) => {
    let line = "";
    for (let i = 0; i < times; i++) {
        line += carac;
    }
    process.stdout.write(line);//Función usada anteriormente para imprimir en pantalla
}
const show = (n,esp) => {
  for (let i = 1; i <= n; i+=2){//Bucle for para la cantidad de filas
    imprimir(" ", 6)
    imprimir(" ",esp)//se imprimen los espacios y las letras
    imprimir("z",i)
    esp--//los espacios se restan en uno y las letras se suman en dos por el i+=2
    console.log('')//salto de línea
  }
  imprimir(" ", 6)
  imprimir("z",(n+1))//línea de la mitad, lo que muestra es n+1 letras
  console.log("")//salto de línea
  esp++//sumamos en uno el espacio para empezar el otro bucle
  for (let i = n-1; i >= 1; i-=2){//se restan en dos las letras y se vuelve a imprimir
    imprimir(" ", 6)
    imprimir(" ",esp)
    imprimir("z",i)
    console.log('')
    esp++//se suma en uno el espacio
  }
}
show(6,3);