// Consiste en adaptar una función/método a que realice la misma tarea con diferentes parámetros
function countItems(x) {
    return x.toString().length;
}

console.log(countItems(1000));
console.log(countItems("Hola mundo"));

function sum(x=0,y=0,z=0) {
    return x + y + z;
}

console.log(sum(10,20));
console.log(sum(10,20,30));