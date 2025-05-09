import React from 'react';
import useFetch from '../hooks/useFetch';

function MyComponent() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

  if (loading) {
    return <p>Caricamento...</p>;
  }

  if (error) {
    return <p>Errore: {error}</p>;
  }

  if (data) {
    return (
      <div>
        <h1>Dato Recuperato:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }

  return null;
}

export default MyComponent;