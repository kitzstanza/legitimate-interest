module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: { assert: false },
  },
  entry: './src/js/main.js', //path relative to this file
  output: {
    filename: './app.bundle.js', //path relative to this file
  },
}
