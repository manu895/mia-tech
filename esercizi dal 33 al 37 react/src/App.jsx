import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todolist from './assets/components/Todolist';
import About from './assets/components/About';
import Layout from './assets/components/Layout';
import TodoDetail from './assets/components/TodoDetail';
import { Provider } from 'react-redux'; 
import { store } from './store/store'; 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Todolist />} />
            <Route path="about" element={<About />} />
            <Route path="todos/:id" element={<TodoDetail />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;