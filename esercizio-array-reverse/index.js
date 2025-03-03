
let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let numeriInvertiti = [];


for (let i = numeri.length - 1; i >= 0; i--) {
    numeriInvertiti.push(numeri[i]);
}


console.log("L'array invertito è:", numeriInvertiti);