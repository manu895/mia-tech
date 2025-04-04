// form
const mioForm = document.getElementById('mioForm');


mioForm.addEventListener('submit', function(event) {
  
  const nome = document.getElementById('nome').value;
  const cognome = document.getElementById('cognome').value;

  
  if (nome === '' || cognome === '') {
    
    alert('Compila entrambi i campi!');

    
    event.preventDefault();
  } else {
    
    alert('Form inviato correttamente!');
    
  }
});