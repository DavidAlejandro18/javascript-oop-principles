// ES6
class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
        this.age = null;
    }
}

class Programer extends Person {
    constructor(language, name, lastname) {
        super(name, lastname);
        this.language = language;
    }
}

const person = new Person('David', 'Gonzalez');
console.log(person);

const programer = new Programer('JavaScript', 'Jhon', 'Ray');
console.log(programer);