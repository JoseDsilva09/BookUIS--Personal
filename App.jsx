import React from 'react';
import BarNav from './components/BarNav';
import Form from './components/form';
import './styles/App.css'; // Puedes tener estilos globales aquí

const App = () => {
  return (
    <div className="app-container">
      <BarNav />
      <div className="content-wrapper">
        <Form />
      </div>
    </div>
  );
};

export default App;
