/**
 * Crear una función que devuelva el promedio o media de un listado de números.
 * Si el listado está vacío, devolver 0.
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
/*         console.log("Estás intentando sumar una lista que no tiene elementos. Si sumas 0 elementos y los divides entre 0 elementos de tu lista, el resultado es 0")
 */        return 0;
    }

    let suma = sumaLista(a)
    let promedio = suma / a.length

    return promedio;
}

console.group("Resultados de Lista 1 = ", lista);
console.log("El resultado de la suma de los elementos es", sumaLista(lista));
console.log("El numero de elementos en la lista es", lista.length)
console.log("El promedio de los elementos de la lista es", calcularPromedioLista(lista));
console.groupEnd();

console.group("Resultados de Lista 2 = ", lista2);
console.log("El resultado de la suma de los elementos es", sumaLista(lista2));
console.log("El numero de elementos en la lista es", lista2.length)
console.log("El promedio de los elementos de la lista es", calcularPromedioLista(lista2));
console.groupEnd();
