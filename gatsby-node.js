const fs = require(`fs`)
const path = require(`path`)
const os = require(`os`)

// Write out theme modules to .cache.

exports.onPreBootstrap = ({ store }, pluginOptions) => {

  const { themes } = pluginOptions

  const all = themes.map(theme => `require("${theme}")`)

  const module = `
const all = [${ all.join(',')}]
module.exports = { all }`

  const dir = `${__dirname}/.cache`

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  fs.writeFileSync(`${dir}/themes.js`, module)
}
