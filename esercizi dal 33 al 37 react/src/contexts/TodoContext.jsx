import { createContext, useState, useEffect } from 'react';

//contesto
export const TodoContext = createContext();

//provider 
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`);
        }
        const data = await response.json();
        setTodos(data);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        setTodos([]);
      }
    };

    fetchTodos();
  }, []);

  const updateTodos = (newTodos) => {
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, loading, error, updateTodos }}>
      {children}
    </TodoContext.Provider>
  );
};