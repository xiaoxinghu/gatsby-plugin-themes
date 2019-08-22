const React = require('react')
// import { StyledThemeProvider } from "./StyledThemeProvider"
const { ThemeProvider } = require('./context')
const { all } = require('./.cache/themes')

const wrapRootElement = (
  { element },
) => {

  return (
    <ThemeProvider themes={all}>
      { element }
      {/* <StyledThemeProvider lightTheme={light} darkTheme={dark}> */}
      {/*   {gatsbyRootProps.element} */}
      {/* </StyledThemeProvider> */}
    </ThemeProvider>
  )
}

module.exports = wrapRootElement
