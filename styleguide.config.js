const { version } = require("./package.json");
const { name } = require("./src/frontend/package.json");
const { merge } = require("webpack-merge");

const commonChild = require("./src/frontend/webpack.config.js");


module.exports = {
  pagePerSection: process.env.NODE_ENV !== "production",
  assetsDir: ".",
  sections: [
    {
      name,
      content: "./introduction.md"
    },

    {
      webpackConfig: merge(commonChild, {
        target: "browserslist",
        browserslist: ["./.browserslistrc"],
      }),
      components: [
    "./src/frontend/src/components/*.tsx",
    "./src/frontend/src/components/**/*.tsx"
      ],
  version,
  title: "decomposition",
  ignore: [
    "./node_modules/react-dom/cjs/react-dom.development.js",
    /node_modules/,
    "**/node_modules/",
    "./styleguide"
  ]
    }
  // require: [
  //   "./src/frontend/src/output.css",
  // ]
  ]
}
