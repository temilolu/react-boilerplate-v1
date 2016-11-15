var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '..', 'app/scripts/components/Index.jsx')
  ],

  output: {
    path: path.resolve(__dirname, '..', 'public/build'),
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
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"staging"',
        'APP_ENV': '"staging"'
      },
      'global.Object.prototype': {},
      'global.GENTLY': false
    }),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ]
}
