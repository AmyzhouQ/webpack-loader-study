const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: ["a-loader", "b-loader", "c-loader"],  // 执行顺序从右到左
      },
    ],
  },
  // 让 Webpack 能够识别 loaders 目录下的自定义 Loader
  resolveLoader: {
    modules: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "loaders"),
    ],
  },
};