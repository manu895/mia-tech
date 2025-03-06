let numbers = [1, 2, 3, 4, 5];

console.log("Numeri moltiplicati per 2:");

numbers.forEach(num => console.log(num * 2));

let squaredNumbers = numbers.map(num => num * num);

console.log("Array con i quadrati dei numeri:", squaredNumbers);