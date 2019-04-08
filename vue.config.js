const path = require('path')
const appData = require('./data.json')
const notes = require('./ITnote.json')
const works = appData.works

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 80,
    https: false,
    proxy: null, // 设置代理
    before(app) {
      app.get('/api/works', function (req, res) {
        res.json({
          errno: 0,
          data: works
        })
      })
      app.get('/api/notes', function (req, res) {
        res.json({
          errno: 0,
          data: notes
        })
      })
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
  }
}
