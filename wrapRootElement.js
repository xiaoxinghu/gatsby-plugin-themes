const React = require('react')
const { ThemeProvider } = require('./context')
const { all } = require('./.cache/themes')

const wrapRootElement = (
  { element },
) => {

  return (
    <ThemeProvider themes={all}>
      { element }
    </ThemeProvider>
  )
}

module.exports = wrapRootElement
