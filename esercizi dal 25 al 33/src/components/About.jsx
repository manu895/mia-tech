import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>About Us</h2>
      <p>Questa è una semplice applicazione per la gestione dei to-do creata con React.</p>
      <p>Utilizza un'API esterna per recuperare i dati</p>
      <button onClick={handleGoHome}>Torna alla Home</button>
    </div>
  );
}

export default About;