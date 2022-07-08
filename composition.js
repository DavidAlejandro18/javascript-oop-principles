const person = {
    name: 'John',
    lastname: 'Doe',
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    }
}

/* address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    country: 'USA'
} */

// La composión es una relación entre objetos
// Por si solo, el objeto adress no hace mucho, pero si es un componente de un objeto mayor, funciona correctamente.
// Un componente no tiene vida independiendo cuando pertenece a otro.