import React, { createContext, useContext, useState } from "react";


const estiloTema = {
    oscuro: {
      background: '#282c34',
      textColor: 'white'
    },
    claro: {
      background: 'white',
      textColor: '#282c34'
    }
  }
  
  const ThemeContext = createContext();
  
  function ThemeProvider(props) {
    const [tema, setTema] = useState('oscuro');
    const cambioTema = () => tema === 'oscuro' ? setTema('claro') : setTema('oscuro');
    const value = { tema: estiloTema[tema], cambioTema, temaNombre: tema };
    return <ThemeContext.Provider value={value} {...props} />;
  }
  
  const useTheme = () => useContext(ThemeContext);
  
  export { ThemeProvider as default, useTheme };