let TypedocWebpackPlugin = require("typedoc-webpack-plugin");
module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  plugins: [
    new TypedocWebpackPlugin({
      name: "Contoso",
      mode: "file",
      theme: "./typedoc-theme/",
      includeDeclarations: false,
      ignoreCompileErrors: true
    })
  ]
};
