import React, {useState} from 'react';
import './App.css';
import CambiodeTema from './componentes/ThemeProvider';
import Header from './componentes/Header';

function App() {

  
  return (
    <CambiodeTema>
    <div className="App">
      <Header />
    </div>
  </CambiodeTema>
  );
}

export default App;

{
  /**
   * 
    <CambiodeTema/>
    <div className="App">
        <h1>Cambio de color de Tema</h1>
        <span>Entre claro y oscuro</span>
        <img src='https://i.scdn.co/image/ab67616d00001e0264e7a260933998d297e0a1de' className='kuromi' />
        <button onClick={toggleTheme}>Cambiar Tema</button>
        <p>El tema es: {theme}</p>
    </div>
   */
}