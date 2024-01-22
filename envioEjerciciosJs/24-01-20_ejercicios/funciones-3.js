/**
 * Crear una función, partiendo del ejercicio 2, que calcule el promedio dentro de un arreglo pero dentro de un rango,
 * esta función recibe el arreglo, un punto de partida y uno de termino
 * y devuelve el promedio de los valores dentro del rango especificado.
 */


let lista = [1, 2, 3, 4, 5]
let lista2 = []


function sumaLista(a) {
    let resultadoSuma = 0;

    for (let i = 0; i < a.length; i++) {
        resultadoSuma += a[i];
    }

    return resultadoSuma;
}

function calcularPromedioLista(a) {

     if (a.length === 0) {
        return 0;  // Devolver 0 si la lista está vacía
    } 

    let suma = sumaLista(a)
    let promedio = suma / a.length

    return promedio;
}

function calcularRangoPromedio(arr, inicio, fin) {

    if (inicio < 0 || fin >= arr.length || inicio > fin) {
        console.error("Rango no válido");
        return null;
    }

    let elementosRango = arr.slice(inicio, fin );
    let promedioRango = calcularPromedioLista(elementosRango);

    return promedioRango;
}

let inicioRango = 0;
let finRango = 3;

console.group("Resultados de Lista 1 = ", lista);
console.log("El resultado de la suma de los elementos es", sumaLista(lista));
console.log("El numero de elementos en la lista es", lista.length)
console.log("El promedio de los elementos de la lista es", calcularPromedioLista(lista));
console.groupEnd;

console.group("Resultados de Lista 2 = ", lista2);
console.log("El resultado de la suma de los elementos es", sumaLista(lista2));
console.log("El numero de elementos en la lista es", lista2.length)
console.log("El promedio de los elementos de la lista es", calcularPromedioLista(lista2));
console.groupEnd;

console.group(`Resultados del rango ${inicioRango}, ${finRango} de Lista 1 =  ${lista.slice(inicioRango , finRango)}`);
console.log("El resultado de la suma de los elementos es", sumaLista(lista.slice(inicioRango , finRango)));
console.log("El numero de elementos en la lista es", lista.slice(inicioRango , finRango).length)
console.log("El promedio de los elementos de la lista es", calcularRangoPromedio(lista, inicioRango, finRango));
console.groupEnd;

