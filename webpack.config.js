var path = require("path");
let webpack = require("webpack");

module.exports = {
  entry: {
    vendor: ["react", "react-dom"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../public"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
