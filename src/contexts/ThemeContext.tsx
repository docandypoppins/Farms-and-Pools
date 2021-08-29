import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap-libs/uikit'

const CACHE_KEY = 'IS_DARK'
const initailload = 'INITIAL_LOAD';

const ThemeContext = React.createContext({ isDark: null, toggleTheme: () => null })

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    if(!(localStorage.getItem(initailload)))
    {
      localStorage.setItem(CACHE_KEY,'true');
      localStorage.setItem(initailload,'true');

    }
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    console.log("isDarkUserSetting",isDarkUserSetting);
    const themepreference = isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false;
    console.log("themepreference",themepreference,JSON.parse(isDarkUserSetting));
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false
  })

  const toggleTheme = () => {
    setIsDark((prevState) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? dark : light}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
