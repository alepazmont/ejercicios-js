/**
 * Escribir una función que reciba una lista por parámetro y devuelva una copia de la lista
 */
const lista = [1, 2, 3, 4, 5]

function devuelveLista(a) {
    let copiaLista = [];

    for (let i = 0; i < a.length; i++) {
        copiaLista.push(a[i])
    }
    return copiaLista;
}
console.log("La lista original es", lista);
console.log("La lista copiada es", devuelveLista(lista));