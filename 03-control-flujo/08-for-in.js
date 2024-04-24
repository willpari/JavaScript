let user = {
    id:1,
    name:'Yui Yuigahama',
    age:25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let waifus = ['Yui Yuigahama', 'Yukino Yukinoshita', 'Kawasaki Saki'];
for(let indice in waifus) {
    console.log(indice, waifus[indice]);
}