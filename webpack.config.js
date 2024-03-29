const path = require('path');
const config = require('./package.json')

module.exports = {
  entry: {
    space:'./src/build/index.js'
  },
  mode:"development",
  devtool: 'source-map',
  output: {
    library: 'SPACEGL',
    libraryTarget: 'var',
    filename: '[name].' + config.version + '.js' ,
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: false
  }
};