const express = require('express')
const app = express()
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleWare = require('webpack-dev-middleware');
const getModuleData = require('./utils/module-package')
const applyHbs = require('@komandaaa/templates')

const staticUrl = '/static'

const startServer = ({ port }) => {
  const moduleData = getModuleData()
  const appPath = `/${moduleData.name}`

  app.use(express.json({extended: true}))
  
  applyHbs(app)

  const compiler = webpack({
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      filename: 'index.js',
      path: path.resolve('dist'),
      libraryTarget: 'umd',
      publicPath: `/static/dummy/1.0.0/`
    },
    resolve: {
      extensions: ['.tsx', '.js', '.jsx', '.ts', '.json']
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }]
    }
  })

  app.use(webpackDevMiddleWare(compiler, {
    publicPath: `/static/dummy/1.0.0`
  }))

  app.get(appPath, (req, res) => {
    res.render('index', {
      baseUrl: staticUrl,
      fireAppVersion: '1.0.0/dist',
      title: 'my app',
      apps: { [moduleData.name]: { version: '1.0.0' } },
      navigation: { [moduleData.name]: appPath, 'dummy.login': '/dummy/login' },
      config: {},
    })
  })

  app.use(
    staticUrl,
    express
      .Router()
      .get(/\/([.-\w]+)\/([.-\w\d]+)\/(.*)/, require("./utils/get-module"))
  );

  app.listen(port, () => {
    console.log(`:) server starts on http://localhost:${port}${appPath}`)
  })
}

module.exports = startServer

