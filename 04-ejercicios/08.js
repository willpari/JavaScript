/**
 * Crear algoritmo que tome un array de
 * objetos y devuelva un array de pares
 * **/

let array = [{
    id: 1,
    name: 'Yui',
},{
    id: 2,
    name: 'Hachiman', 
},{
    id: 3,
    name: 'Yukino',
}];

let pares = [
    [1, { id: 1, name: "Yui"}],
    [2, { id: 2, name: "Hachiman"}],
    [3, { id: 3, name: "Yukino"}],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }

    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);