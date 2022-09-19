module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: "./src/js/main.js", //path relative to this file
  output: {
    filename: "./app.bundle.js", //path relative to this file
  },
}
