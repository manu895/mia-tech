function outerFunction(x, initialValue) {
    
    let result = initialValue;
    
    return function innerFunction(y) {

        result += y;

        return result;
    };
}


let somma = outerFunction(5, 10);

console.log(somma(3));

console.log(somma(2));