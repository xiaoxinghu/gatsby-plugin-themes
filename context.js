const React = require('react')
const { createContext, useEffect, useState } = require('react')

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

  const next = () => {
    const newTheme = (themeIndex + 1) % themes.length
    console.log(`old: ${themeIndex}, next: ${newTheme}`)
    setThemeIndex(newTheme)
    // localStorage.setItem("dark", JSON.stringify(toggledTheme))
  }

  // useEffect(() => {
  //   const localStorageTheme = localStorage.getItem("theme")
  //   const latestTheme = localStorageTheme && JSON.parse(localStorageTheme)
  //   if (latestTheme) {
  //     setIsDark(latestTheme)
  //   } else if (supportsDarkMode()) {
  //     setIsDark(true)
  //   }
  // }, [])

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
