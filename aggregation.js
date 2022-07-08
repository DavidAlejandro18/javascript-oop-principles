// El objeto mayor se conoce como un Aggregate
const company = {
    name: "Dev Corp",
    employees: []
};

class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}

const jhon = new Person('Jhon', 'Ray');
const maria = new Person('Maria', 'Sanchez');

// Los objetos jhon y maria serian los Components
company.employees.push(jhon);
company.employees.push(maria);

console.log(company);