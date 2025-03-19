function somma(...numeri) {
    let totale = 0;

    for (let numero of numeri) {

      totale += numero;
    }
    return totale;

  }

  
  
  console.log(somma(1, 2, 3));

  console.log(somma(5, 10, 15, 20));

  console.log(somma(7, 8));

  console.log(somma(100));
  