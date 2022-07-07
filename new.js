function Person() {
    "use strict"; // Evita errores de sintaxis, obliga a usar 'new' para hacer una nueva instancia del objeto
    this.name = ""
    this.lastname = ""
}

const person = Person();
console.log(person);

const person1 = new Person();
console.log(person1);