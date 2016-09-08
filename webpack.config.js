module.exports = {
  entry: './main.js',
  output: {
    path: __dirname+'/dist',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
resolve: {
        extensions: ['', '.js', '.json', '.scss','vue']
    }
}
