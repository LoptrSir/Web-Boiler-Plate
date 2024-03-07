module.exports = {
  mode: "development",
  watch: true, //Automatically updates files for minor programing changes after Webpack creates the build.
  entry: {
    index: "./src/index.js",
  },
  devtool: "inline-source-map", //error tracking. Not best option for production.
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, //clean up dist files to only relevant ones
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
};
