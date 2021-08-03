const { startDevServer } = require('@cypress/vite-dev-server')
const path = require('path')
const viteConfig = {
  configFile: path.resolve(__dirname, '../../vite.config.js')
}

module.exports = (on, config) => {
  on('dev-server:start', (options) => {
    return startDevServer({ options, viteConfig })
  })

  return config
}
