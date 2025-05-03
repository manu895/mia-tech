import React, { useState, useCallback, useRef, useEffect, useMemo, useContext } from 'react';
import useFetch from '../hooks/useFetch';
// import useFilteredTodos from '../hooks/useFilteredTodos'; // viene surclassato da useMemo
import { TodoContext } from '../contexts/Todocontext';

function Todolist() {
  const { todos, loading, error } = useContext(TodoContext);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const filteredTodos = useMemo(() => {
    if (!todos) {
      return [];
    }
    const lowerSearchTerm = searchTerm.toLowerCase();
    return todos.filter(todo =>
      todo.title.toLowerCase().includes(lowerSearchTerm)
    );
  }, [todos, searchTerm]);

  if (loading) {
    return <p>Caricamento della lista di to-do...</p>;
  }

  if (error) {
    return <p>Errore nel caricamento dei to-do: {error}</p>;
  }

  return (
    <div>
      <h2>Lista di To-Do</h2>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Cerca to-do..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredTodos && filteredTodos.map(todo => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? '(Completato)' : '(Da completare)'}
          </li>
        ))}
        {!loading && todos && filteredTodos.length === 0 && (
          <li>Nessun to-do trovato.</li>
        )}
      </ul>
    </div>
  );
}

export default Todolist;