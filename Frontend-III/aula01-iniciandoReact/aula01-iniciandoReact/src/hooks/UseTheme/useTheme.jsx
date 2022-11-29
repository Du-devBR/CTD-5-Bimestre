import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext()

export function ThemeProvider(props){

  const[theme, setTheme] = useState('dark')

  function changeTheme(themeReceived){
    if(themeReceived !== theme){
      setTheme(themeReceived)
    }
  }

  return(
    <ThemeContext.Provider value={{ theme, changeTheme}}>
      { props.children }
    </ThemeContext.Provider>
  )
}

export function useTheme(){
  const context = useContext(ThemeContext)

  return context
}
