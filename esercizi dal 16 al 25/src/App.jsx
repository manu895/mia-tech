import React from 'react';
import MyComponent from './components/Mycomponent';
import Todolist from './components/Todolist';
import { TodoProvider } from './contexts/Todocontext';

function App() {
  return (
    <TodoProvider>
      <div>
        <h1>La Mia Applicazione</h1>
        <MyComponent />
        <Todolist />
      </div>
    </TodoProvider>
  );
}

export default App;