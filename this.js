const user = {
    name: "David",
    lastname: "Tovar",
    age: 21,
    showFullName() {
        return this.name + " " + this.lastname;
    }
}

console.log(user.showFullName());

const account = {
    number: "XXXX-XXXX-XXXX-XXXX",
    amount: 100,
    deposit(quantity) {
        this.amount += quantity;
    },
    withdraw(quantity) {
        this.amount -= quantity;
    }
}

account.deposit(120);
account.deposit(50);
account.deposit(200);
console.log(account.amount);
account.withdraw(234);
console.log(account.amount);