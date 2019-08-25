const React = require('react')
const { createContext, useEffect, useState } = require('react')

const KEY = `gatsby-plugin-themes-theme-index`

const ThemeContext = createContext({
  theme: {},
  next: () => undefined,
})

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches

exports.ThemeContext = ThemeContext

const ThemeProvider = ({ themes, children }) => {
  const [themeIndex, setThemeIndex] = useState(0)
  const theme = themes[themeIndex]

  const setTheme = index => {
    const i = index % themes.length
    localStorage.setItem(KEY, i)
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
      setTheme(Math.max(themes.findIndex(t => t.dark), 0))
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

exports.ThemeProvider = ThemeProvider
