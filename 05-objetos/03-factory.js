
function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Yui', 'Yuigahama@gmail.com');
let user2 = crearUsuario('Yukino', 'Yukinoshita@gmail.com');

console.log(user1, user2);