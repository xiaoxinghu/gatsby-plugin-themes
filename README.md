# gatsby plugin for themes (and switching between them)

This is a style system agnostic plugin. No matter what style system you are
using (styled-components, emotion, theme-ui ...), you can use them with this
plugin.

# How to Use

In your `gatsby-config.js` file.
``` javascript
module.exports = {
  // ...
  {
    resolve: `gatsby-plugin-themes`,
    options: {
      themes: [
        `${__dirname}/src/themes/dark.js`,
        `${__dirname}/src/themes/light.js`,
      ],
    },
  }
  // ...
}
```

And anywhere in any of your components.

``` javascript
import React, { useContext } from 'react'
import { ThemeContext } from 'gatsby-plugin-themes'
// ...
const { theme, next } = useContext(ThemeContext)
```

Here the `theme` is one of your modules decleared in the `gatsby-config.js` file
(in this example, `dark.js` or `light.js`). And I don't care what's in it, nor
how you use it, you are the boss.

The `next` is a function to toggle between your themes. And that's about it. Enjoy.
