const React = require('react')
const { ThemeProvider } = require('./context')
const themes = require('./.cache/themes')

const wrapRootElement = (
  { element },
) => {

  return (
    <ThemeProvider themes={themes}>
      { element }
    </ThemeProvider>
  )
}

module.exports = wrapRootElement
