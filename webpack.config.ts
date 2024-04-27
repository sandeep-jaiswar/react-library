const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]_bundle.js",
    libraryTarget: "umd",
    globalObject: "this",
    library: "react-library",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development",
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "initial",
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "src", to: "src" }],
    }),
  ],
};
