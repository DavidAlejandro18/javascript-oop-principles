const string = new Object("Hello world");
string.name = "Special String";
string.test = function () {
    return this+"test";
}

console.log(string.name);

const user = {
    name: "David",
    lastname: "Tovar",
    age: 21,
    showFullName() {
        return `${this.name} ${this.lastname}`;
    }
}

console.log(Object.keys(user));
console.log(Object.values(user));