class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}

const jhon = new Person('Jhon', 'Ray');
const maria = new Person('Maria', 'Sanchez');

// Relation - Association: Relaciona un objeto con otro
maria.parent = jhon;

console.log(maria);
console.log(jhon);