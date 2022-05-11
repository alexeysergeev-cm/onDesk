const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

const mode = process.env.NODE_ENV || "development";
console.log(mode, "in WEBPACK config ---->>>")

module.exports = {
  entry: "./frontend/onDesk.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devtool: mode === "development" ? "source-map" : false,
  mode: mode,
  resolve: {
    extensions: [".js", ".jsx", "*", ".css"],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(mode),
    }),
    new Dotenv(),
  ],
};
