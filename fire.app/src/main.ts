import 'systemjs/dist/system'
import 'systemjs/dist/extras/amd'
import 'systemjs/dist/extras/named-register'
import 'systemjs/dist/extras/named-exports'
import 'systemjs/dist/extras/transform'

export default async ({ apps, navigation, config }) => {
  const appName = location.pathname.replace('/', '')
  const appPath = `/static/${appName}/${apps[appName].version}/index.js`

  const {default: component, mount, unmount} = await System.import(appPath)

  mount(component.default)
}
