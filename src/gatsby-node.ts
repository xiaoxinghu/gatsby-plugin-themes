import fs from 'fs'
import path from 'path'
import os from 'os'

// Write out theme modules to .cache.

export const onPreBootstrap = ({ store }, pluginOptions) => {

  const program = store.getState().program

  let module
  if (pluginOptions.pathToConfig) {
    module = `module.exports = require("${
      path.isAbsolute(pluginOptions.pathToConfig)
        ? pluginOptions.pathToConfig
        : path.join(program.directory, pluginOptions.pathToConfig)
    }")`
    if (os.platform() === `win32`) {
      module = module.split(`\\`).join(`\\\\`)
    }
  }

  const dir = `${__dirname}/.cache`

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  fs.writeFileSync(`${dir}/themes.js`, module)
}
