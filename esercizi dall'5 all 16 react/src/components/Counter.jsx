import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  
  useEffect(() => {
    document.title = `Contatore: ${count}`;
  }, [count]); 

  return (
    <div>
      Count: {count}
      <button onClick={handleIncrement}>Incrementa</button>
      <button onClick={handleDecrement}>Decrementa</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;