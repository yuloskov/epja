// const app = require('express')()
const hbs = require('express-hbs')

module.exports = function applyHbs(app) {
  app.engine('hbs', hbs.express4({}))
  app.set('view engine', 'hbs')
  app.set('views', __dirname + '/views')

  hbs.registerHelper('toJSON', (obj) => {
    if (typeof obj === 'object') {
      return JSON.stringify(obj)
    }

    return obj
  })
}

// app.get('/', (req, res) => {
//   res.render('index', {
//     baseUrl: 'static',
//     fireAppVersion: '2.0.12',
//     title: 'my app',
//     apps: { foo: { version: '1.0.0', name: 'foo' } },
//     navigation: { 'dummy.main': '/dummy', 'dummy.login': '/dummy/login' },
//     config: {},
//   })
// })

// app.listen(1234, () => {
//   console.log('hi')
// })