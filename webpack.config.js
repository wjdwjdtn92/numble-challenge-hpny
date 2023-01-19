const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const getAbsolutePath = (target) => path.resolve(__dirname, target);

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    // 빌드(컴파일, 번들링 등) 결과 파일 브라우저 캐싱(Cachinig)
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
  },
  // 번들링 모드 설정
  mode: 'development',
  target: 'web',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true,
    historyApiFallback: {
      index: '/index.html',
    },
    port: 8080,
  },
  resolve: {
    // 생략 가능한 확장자
    extensions: ['.js', '.json'],
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      // CSS rules
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i, // 모듈 파일 제외 설정
        use: ['style-loader', 'css-loader'],
      },
      // CSS Module ([filename].module.css)
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // output file name
      template: 'index.html', // template file name
    }),
    new CleanWebpackPlugin(),
    // new CopyPlugin({ patterns: [{ from: 'src/assets', to: 'dist' }] }),
  ],
};
