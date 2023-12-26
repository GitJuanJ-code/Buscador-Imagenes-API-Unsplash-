// src/App.tsx
import React from 'react';
import './style/estilo.css';
import ImageList from './components/ImageList';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Buscador de Imágenes </h1>
      <ImageList />
    </div>
  );
};

export default App;
