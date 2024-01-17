const { version } = require("./package.json");
const { merge } = require("webpack-merge");
const path = require("path");
const dev = require("./webpack.dev.js");

module.exports = {
  pagePerSection: process.env.NODE_ENV !== "production",
  assetsDir: ".",
  webpackConfig: {
    module: {
      rules: [{
        test: /\.(tsx|jsx|ts|js)$/,

        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, "src/frontend/babel.config.js"),
            }
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],

      }]
    }
  },
  components: [
    "./src/frontend/src/components/*.tsx",
    "./src/frontend/src/components/**/*.tsx"
  ]
  ,
  version,
  title: "decomposition",
  ignore: [
    "./node_modules/react-dom/cjs/react-dom.development.js",
    /node_modules/,
    "**/node_modules/",
    "./styleguide",
    "**/getId.ts"
  ]
  // require: [
  //   "./src/frontend/src/output.css",
  // ]

}
