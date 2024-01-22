/*
Dibujar un triángulo de la siguiente manera:
*
**
***
****
*****
****
***
**
*
El número de asteriscos en el punto máximo es 5
*/
const maximo = 5;
for (let i = 0 ; i <= maximo ; i++) {
    let fila = "";
    for (let j = 1 ; j <=i ; j++) {
        fila += "*"
    }
console.log(fila)
}
for (let i = maximo - 1 ; i >= 1 ; i--) {
    let fila = "";
    for (let j = 1 ; j <=i ; j++) {
        fila += "*"
    }
console.log(fila)
}