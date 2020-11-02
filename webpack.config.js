const path = require('path');

module.exports = (env) => {
  // ** Configure webpack according to enviroment. **
  const isProd = env === 'production';

  return {
    entry: './src/app.tsx',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [{
        loader: 'ts-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    // sourceMap
    devtool: isProd ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
    }
  };
};
