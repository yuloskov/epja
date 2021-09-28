const express = require('express')
const app = express()
const getModuleData = require('./utils/module-package')
const applyHbs = require('@komandaaa/templates')

const startServer = ({ port }) => {
  const moduleData = getModuleData()
  const appPath = `/${moduleData.name}`

  app.use(express.json({}))

  app.get(appPath, (req, res) => {
    res.render('index', {
      baseUrl: 'static',
      fireAppVersion: '1.0.0',
      title: 'my app',
      apps: { foo: { version: '1.0.0', name: 'foo' } },
      navigation: { 'dummy.main': '/dummy', 'dummy.login': '/dummy/login' },
      config: {},
    })
  })
  
  applyHbs(app)
  app.listen(port, () => {
    console.log(`:) server starts on http://localhost:${port}${appPath}`)
  })
}

module.exports = startServer

