var path = require('path');
var webpack = require("webpack");

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    'babel-polyfill',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, '..', 'app/scripts/components/Index.jsx')
  ],

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"',
        'APP_ENV': '"development"'
      }
    })
  ],

  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'bundle.js',
    publicPath: '/build'
  },

  module: {
    loaders: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=100000' },
      { test: /.(woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url?limit=100000' }
    ],
    postLoaders: [{
      test: /\.js$/,
      loaders: ['es3ify-loader']
    }]
  }
}
