const path = require('path')

const getCleanName = (name) => name.replace(/^@[-\w]+\//, "");

const getModuleData = () => {
  const moduleData = require(path.resolve('package'))
  return {
    version: moduleData.version,
    entryPoint: moduleData.main,
    name: getCleanName(moduleData.name),
  }
}

module.exports = getModuleData;