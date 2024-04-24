// Personajes de anime

let nombre = 'Yui';
let anime = 'Oregairu';
let edad = 17;

let personaje = {
    nombre: 'Yui',
    anime: 'Oregairu',
    edad: 17,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 18;

let llave = 'edad';
personaje[llave] =19;

delete personaje.anime;

console.log(personaje);