import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setTodos, setLoading, setError, toggleComplete } from '../../features/todos/todosSlice';

function Todolist() {
  const todos = useSelector((state) => state.todos.todos);
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(() => searchParams.get('search') || '');
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

    if (!todos || todos.length === 0 && !loading && !error) {
      const fetchTodos = async () => {
        dispatch(setLoading());
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos');
          if (!response.ok) {
            throw new Error(`Errore HTTP: ${response.status}`);
          }
          const data = await response.json();
          dispatch(setTodos(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };

      fetchTodos();
    }
  }, [dispatch, todos, loading, error]);

  const handleTodoClick = (id) => {
    dispatch(toggleComplete(id));
  };

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
          <li key={todo.id} onClick={() => handleTodoClick(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}>
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