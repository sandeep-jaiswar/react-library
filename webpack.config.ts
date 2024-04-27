const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]_bundle.js",
    libraryTarget: "umd",
    globalObject: "this",
    library: "react-library",
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.(ts|tsx)$/, use: "ts-loader", exclude: /node_modules/ }, // Use ts-loader for TypeScript files
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  mode: "development",
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "src/**/types/index.ts", to: "types" }],
    }),
  ],
};
