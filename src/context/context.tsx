import React, { Dispatch, SetStateAction, useState } from "react";

type ThemeType = "lightTheme"|"darkTheme"

interface ThemeContextProps {
  themeMode:ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}
interface ValueChildrenProps {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeMode:"lightTheme"
} as ThemeContextProps);

export const ThemeProvider : React.FC<ValueChildrenProps> = ({ children }) =>{
  const [theme, setTheme] = useState<ThemeType>("lightTheme")

  return(
    <ThemeContext.Provider value={{
      themeMode:theme,
      setTheme
      }}>
      {children}
    </ThemeContext.Provider>
  )
}