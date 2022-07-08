// Encapsulación: concentra los datos y funciones ocultando los detalles internos de la implementación.

const company = {
    name: "Dev Corp",
    employees: [],
    sortEmployees() {
        return this.employees;
    }
}

// company.sortEmployees = 'string';
// company.sortEmployees(); // Esto generara un error ya que modificamos un metodo de la clase a nuestro gusto y eso no lo podemos permitir.

function Company(name) {
    let employees = [];
    this.name = name;

    this.getEmployees = function() {
        return employees;
    }

    this.addEmployee = function(employee) {
        employees.push(employee);
    }
}

const company1 = new Company('Dev Corp');
const company2 = new Company('Dev Corp 2');

console.log(company1.employees); // Logramos encapsular la propiedad 'employees' de la clase Company para evitar su modificación

company1.addEmployee({ name: 'Jhon', lastname: 'Ray' });

console.log(company1.getEmployees());