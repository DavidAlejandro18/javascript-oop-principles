// Permite procesar diferentes de objetos con diferentes tipos de datos y de herencias

class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}

class Programmer extends Person {
    constructor(language, name, lastname) {
        super(name, lastname);
        this.language = language;
    }
}

const job = new Person("Job", "Israel");
const david = new Programmer("JavaScript", "David", "Tovar");

console.log(job);
console.log(david);

function writeFullName(p) {
    return `${p.name} ${p.lastname}`;
}

console.log(writeFullName(job));
console.log(writeFullName(david));