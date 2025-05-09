import React, { useState, useCallback, useRef, useEffect, useMemo, useContext } from 'react';
import { TodoContext } from '../contexts/Todocontext';
import { Link, useSearchParams } from 'react-router-dom'; 

function Todolist() {
  const { todos, loading, error } = useContext(TodoContext);
  const [searchParams, setSearchParams] = useSearchParams(); 
  const [searchTerm, setSearchTerm] = useState(() => {  
    return searchParams.get('search') || '';
  });
  const searchInputRef = useRef(null);

  const handleSearchChange = useCallback((event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    if (newSearchTerm) {
      setSearchParams({ search: newSearchTerm });
    } else {
      setSearchParams({}); 
    }
  }, [setSearchParams]);

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
            <Link to={`/todos/${todo.id}`}>
              {todo.title} {todo.completed ? '(Completato)' : '(Da completare)'}
            </Link>
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