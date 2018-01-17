var helpers = require('./helpers');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'ng2-vendor': './src/ng2-vendor.ts',
    'compiled_v2': './src/ngrx_store_demo.ts'
  },
  output: {
    path: helpers.root('dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    rules: [
    {
      test: /\.ts$/,
      loader: 'awesome-typescript-loader'
    }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ]
}
