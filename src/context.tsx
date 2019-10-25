import React from 'react'
import { createContext, useEffect, useState } from 'react'

const KEY = `gatsby-plugin-themes-theme-index`

export const ThemeContext = createContext({
  theme: {},
  next: () => undefined,
})

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches

export const ThemeProvider = props => {
  const { themes, children } = props
  const _themes = Array.isArray(themes) ? themes : [themes]
  const [themeIndex, setThemeIndex] = useState(0)
  const theme = _themes[themeIndex]

  const setTheme = index => {
    const i = index % _themes.length
    localStorage.setItem(KEY, `${i}`)
    setThemeIndex(i)
  }

  const next = () => {
    setTheme(themeIndex + 1)
  }

  useEffect(() => {
    const localThemeIndex = Number(localStorage.getItem(KEY))
    if (localThemeIndex !== NaN) {
      setTheme(localThemeIndex)
    } else if (supportsDarkMode()) {
      setTheme(Math.max(_themes.findIndex(t => t.dark), 0))
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        next,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

