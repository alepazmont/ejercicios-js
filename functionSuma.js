function suma(a, b) {
    return a + b;
}
console.log(suma(3,2))

function devolverCuantasVecesNumero(arr, num) {
    let cuantasVeces = 0 ;

    for ( i = 0 ; i < arr.length ; i++) {
        if (arr[i] === num) {
            cuantasVeces++;
        } 
    }
    return cuantasVeces;
}

let arrayNumeros = [1 , 2 , 2 , 3 , 3 , 3];
let numeroBuscado = 2;

let repetido = devolverCuantasVecesNumero(arrayNumeros, numeroBuscado);

console.log(`El número ${numeroBuscado} aparece ${repetido} veces en el array.`);

