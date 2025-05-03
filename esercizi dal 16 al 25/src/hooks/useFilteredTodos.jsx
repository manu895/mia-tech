import { useState, useEffect } from 'react';

function useFilteredTodos(todos, searchTerm) {
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (!todos) {
      setFilteredTodos([]);
      return;
    }

    const lowerSearchTerm = searchTerm ? searchTerm.toLowerCase() : '';

    const newFilteredTodos = todos.filter(todo =>
      todo.title.toLowerCase().includes(lowerSearchTerm)
    );

    setFilteredTodos(newFilteredTodos);
  }, [todos, searchTerm]);

  return filteredTodos;
}

export default useFilteredTodos;