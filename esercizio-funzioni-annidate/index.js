function outerFunction(x) {

    function innerFunction(y) {
        return x + y; 

    }
    return innerFunction; 
}

let sommaCon5 = outerFunction(5); 

console.log(sommaCon5(3));