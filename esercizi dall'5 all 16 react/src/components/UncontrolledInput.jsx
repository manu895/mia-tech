import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      alert(`Valore input (via ref): ${inputValue}`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      alert(`Hai scritto (non controllato): ${inputValue}`);
    }
  };

  return (
    <div>
      <h2>Input Non Controllato</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="uncontrolledInput">Inserisci del testo:</label>
        <input type="text" id="uncontrolledInput" ref={inputRef} />
        <button type="submit">Mostra Valore (Submit)</button>
      </form>
      <button type="button" onClick={handleClick}>Mostra Valore (Click)</button>
    </div>
  );
};

export default UncontrolledInput;