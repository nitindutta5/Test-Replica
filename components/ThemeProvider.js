import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = (props) => {
  const [dark, setDark] = useState(false);
  const toggle = (value) => {
    setDark(value);
  }
  return (
    <ThemeContext.Provider value={{
      dark,
      toggle,
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;