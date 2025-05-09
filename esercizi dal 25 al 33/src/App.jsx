// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todolist from './components/Todolist';
import About from './components/About';
import Layout from './components/Layout';
import TodoDetail from './components/TodoDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Todolist />} />
          <Route path="about" element={<About />} />
          <Route path="todos/:id" element={<TodoDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;