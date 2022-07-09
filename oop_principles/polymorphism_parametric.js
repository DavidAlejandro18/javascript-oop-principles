// Métodos que trabajan con parametros de cualquier tipo (generics)

function Stack() {
    this.items = [];

    this.push = function(element) {
        this.items.push(element);
    }
}


const stack = new Stack();
stack.push("Hello world");
stack.push(true);

const stack2 = new Stack();
stack2.push(20);
stack2.push({ name: "John" });

console.log(stack.items);
console.log(stack2.items);