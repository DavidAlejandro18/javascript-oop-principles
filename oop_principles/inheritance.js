// Herencia: nos permite crear objetos especializados apartir de uno más generico.

// ES5
function Person() {
    this.name = '';
    this.lastname = '';
}

function Programmer() {
    this.language = '';
}

Programmer.prototype = new Person();

const person = new Person();
person.name = 'David';
person.lastname = 'Gonzalez';
console.log(person);

const programer = new Programmer();
programer.name = 'Jhon';
programer.lastname = 'Ray';
programer.language = 'JavaScript';

console.log(programer);