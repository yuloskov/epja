const express = require('express')
const app = express()
const getModuleData = require('./utils/module-package')

const startServer = ({ port }) => {
  const moduleData = getModuleData();
  const appPath = `/${moduleData.name}`

  app.use(express.json({}))

  app.get(appPath, (req, res) => {
    res.send(`
      <body>
        <h1>Hello</h1>
      </body>
    `)
  })
  app.listen(port, () => {
    console.log(`:) server starts on http://localhost:${port}${appPath}`)
  })
}

module.exports = startServer;

