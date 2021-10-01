const fs = require('fs')

const init = () => {
  const dependencies = [
    "react", 
    "react-dom",
    "../fire.app", // "@komandaaa/fire.app",
    "webpack",
    "webpack-dev-middleware",
    "ts-loader",
    "typescript",
  ]
  
  const devDependencies = [
    "@types/react",
    "@types/react-dom",
  ]

  require("child_process").execSync(
    `npm install --save ${dependencies.join(" ")}`,
    {
      stdio: "inherit",
    }
  )

  require("child_process").execSync(
    `npm install --save-dev ${devDependencies.join(" ")}`,
    {
      stdio: "inherit",
    }
  )

  const path = require("path")
  const fs = require("fs")
  const packagepath = path.resolve("package.json")
  const package = require(packagepath)

  package.scripts = package.scripts || {}
  package.scripts.start = "komandaaa-cli --server"
  
  console.log('Installed dependencies: \n', dependencies)
  console.log('Installed dev-dependencies: \n', devDependencies)
  console.log('Configured scripts: \n', package.scripts)

  const tsConfigPath = path.resolve('tsconfig.json')

  if (!fs.existsSync(tsConfigPath)) {
    const tsConfig = {
      "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true,
      "strict": true,
      "noImplicitAny": false,
      "skipLibCheck": true,
      "moduleResolution":"node"
      }
    }
    fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 4))
  }
  fs.writeFileSync(packagepath, JSON.stringify(package, null, 4))

  }

module.exports = init;