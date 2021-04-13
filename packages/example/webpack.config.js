const path = require('path');

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 3001,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              "@babel/proposal-class-properties",
              "@babel/plugin-transform-runtime"
            ]
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  }
};