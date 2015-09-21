module.exports = {
  entry: './src/App.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|server.js)/,
        loader: 'babel'
      }
    ]
  }
}
