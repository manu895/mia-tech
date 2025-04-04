
const miaLista = document.createElement('ul');



for (let i = 1; i <= 5; i++) {
  
  const elementoLista = document.createElement('li');

  
  elementoLista.textContent = 'Elemento ' + i;

  
  miaLista.appendChild(elementoLista);
}


document.body.appendChild(miaLista);