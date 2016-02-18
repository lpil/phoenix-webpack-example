'use strict';

import ExtractText from "extract-text-webpack-plugin";

const config = {
  entry: "./web/static/js/app.js",
  output: {
    path: "./priv/static",
    filename: "js/app.js",
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract("style", "css!sass"),
      },
      {
        test: /\.(ttf|eot|svg|woff2?)$/,
        loader : "file-loader?name=fonts/[name]-[hash:6].[ext]",
      },
    ],
  },

  // Set output location
  plugins: [
    new ExtractText("css/app.css", {
      allChunks: true
    })
  ],
};

export default config;
