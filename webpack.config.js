const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: "public"
      }
    ])
  ],

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          failOnError: true
          // eslint options (if necessary)
        }
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: "babel-loader"
        // ,options:{
        //   presets:[
        //     "@babel/presets-env"
        //   ]
        // }
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
};
