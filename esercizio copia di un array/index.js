const numeriOriginali = [1, 2, 3, 4, 5];

const copiaNumeri = [...numeriOriginali];

numeriOriginali.push(6);

console.log("Array originale:", numeriOriginali);

console.log("Array copiato:", copiaNumeri);