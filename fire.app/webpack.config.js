const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/main.js",
  },
  output: {
    library: "fireApp",
    libraryExport: "default",
    path: path.resolve(__dirname, "dist"),
  },
};
