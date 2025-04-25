import React from 'react';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import LoginForm from './components/LoginForm';
import UncontrolledInput from './components/UncontrolledInput';
import ItemList from './components/ItemList';
import Card from './components/Card';

const App = () => {
  const mieiElementi = ["Primo elemento", "Secondo elemento", "Terzo elemento"];

  return (
    <>
      <Card>
        <h2>Contatore</h2>
        <Counter />
      </Card>
      <Card>
        <h3>Input di Testo</h3>
        <TextInput />
      </Card>
      <Card>
        <h4>Form di Login</h4>
        <LoginForm />
      </Card>
      <Card>
        <h5>Input Non Controllato</h5>
        <UncontrolledInput />
      </Card>
      <Card>
        <h6>Lista di Elementi</h6>
        <ItemList items={mieiElementi} />
      </Card>
    </>
  );
};

export default App;