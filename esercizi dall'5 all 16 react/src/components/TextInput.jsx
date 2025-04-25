import React, { useState } from 'react';

const TextInput = () => {
  
  const [inputValue, setInputValue] = useState('');

  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="textInput">Prova react: </label>
      <input
        type="text"
        id="textInput"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Hai scritto: {inputValue}</p>
    </div>
  );
};

export default TextInput;