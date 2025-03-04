function createCounter() {

    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        
        decrement: function() {
            count--;
            return count;
        }
    };
}


let counter = createCounter();

//possiamo incrementare o decrementare tutte le volte che vogliamo
console.log(counter.increment());

console.log(counter.increment());

console.log(counter.increment());

console.log(counter.decrement());

console.log(counter.decrement());