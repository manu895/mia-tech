import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TodoDetail() {
  const { id } = useParams(); 
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      setLoading(true);
      setError(null);
      setTodo(null);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`);
        }
        const data = await response.json();
        setTodo(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTodo();
  }, [id]);

  if (loading) {
    return <p>Caricamento dettagli del to-do...</p>;
  }

  if (error) {
    return <p>Errore nel caricamento dei dettagli del to-do: {error}</p>;
  }

  if (todo) {
    return (
      <div>
        <h2>Dettagli del To-Do</h2>
        <p><strong>ID:</strong> {todo.id}</p>
        <p><strong>Titolo:</strong> {todo.title}</p>
        <p><strong>Completato:</strong> {todo.completed ? 'Sì' : 'No'}</p>
      </div>
    );
  }

  return null;
}

export default TodoDetail;