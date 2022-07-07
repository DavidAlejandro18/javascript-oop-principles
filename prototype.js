function Person(name, lastname) {
    this.name = name
    this.lastname = lastname
    this.displayName = function() {
        return `${this.name} ${this.lastname}`
    }
}

const jhon = new Person("Jhon", "McMillan");
const mario = new Person("Mario", "Rossi");
const maria = new Person("Maria", "Monzerrat");
const jose = new Person("Jose", "Perez");

// Aquí solo agregamos un nuevo método a la instancia de Jhon
/* jhon.greet = function() {
    return `Hello I'm ${this.name}`
} */

// Agrega el método en el constructor Person, por ende esta disponible en todas las instancias
Person.prototype.greet = function() {
    return `Hello I'm ${this.name}`
}

Person.prototype.age = 100;

console.log(jhon.greet());
console.log(mario.greet());
console.log(maria.greet());
console.log(jose.greet());