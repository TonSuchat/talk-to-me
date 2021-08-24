const path = require("path");
const nodeExternals = require("webpack-node-externals");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: "./src/server.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  externals: [nodeExternals()],
};
