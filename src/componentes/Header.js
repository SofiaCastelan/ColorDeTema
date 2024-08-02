import React from 'react';

import { useTheme } from './ThemeProvider';

const Header = () => {
  const { tema, cambioTema, temaNombre } = useTheme();
  return (
    <header className="App-header" style={{ backgroundColor: tema.background, color: tema.textColor }}>
         <h1>Cambio de color de Tema</h1>
         <span>Entre claro y oscuro</span>
      <img src='https://i.scdn.co/image/ab67616d00001e0264e7a260933998d297e0a1de' className='kuromi' alt="kuro" />
      <button onClick={cambioTema}>Cambiar Tema</button>
      <p>El tema es: {temaNombre}</p>
    </header>
  )
}

export default Header;