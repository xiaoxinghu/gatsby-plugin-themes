import React from 'react'
import { ThemeProvider } from './context'

const themes = require('./.cache/themes')

export const wrapRootElement = (
  { element },
) => {

  return (
    <ThemeProvider themes={themes}>
      {element}
    </ThemeProvider>
  )
}
