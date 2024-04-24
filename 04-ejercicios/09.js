/**
 * Crear algoritmo que devuelva un
 * array de objetos en base a pares
 * **/

let pairs = [
    [1, { name: "Yui" }],
    [2, { name: "Hachiman" }],
    [3, { name: "Yukinoshita" }],
];

let array = [{
    id: 1,
    name: 'Yui',
},{
    id: 2,
    name: 'Hachiman',
},{
    id: 3,
    name: 'Yukinoshita',
}];
function toCollection(arr) {
    let collection = [];
    for (idx in arr){
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }

    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);