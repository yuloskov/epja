const path = require('path')
const getModuleData = () => {
  const moduleData = require(path.resolve('package'))
  return {
    version: moduleData.version,
    entryPoint: moduleData.main,
    name: moduleData.name,
  }
}

module.exports = getModuleData;