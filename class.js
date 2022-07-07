// Syntaxis sugar: forma bonita de escribir código, pero para el interprete es completamente lo mismo.
class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    greet() {
        return `Hello I'm ${this.name} ${this.lastname}`;
    }

}

const user1 = new Person('Joe', 'Ray');
const user2 = new Person('Ryan', 'Ray');

console.log(user1.greet());
console.log(user2.greet());