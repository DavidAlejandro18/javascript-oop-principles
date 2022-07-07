const user1 = {
    name: "David",
    lastname: "Tovar",
    age: 21,
    showFullName() {
        return `${this.name} ${this.lastname}`;
    }
}

// Constructor de objetos
function Person() {
    this.name = "";
    this.lastname = "";
    this.age = 0;
    this.showFullName = function() {
        return `${this.name} ${this.lastname}`;
    }
}

const user2 = new Person();
user2.name = "Joe";
user2.lastname = "McMillan";
user2.age = 30;
console.log(user2.showFullName());

const user3 = new Person();
const user4 = new Person();

console.log(user3);
console.log(user4);