const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env.mode}.js`)(env);

module.exports = env => {
  return webpackMerge(
    {
      mode: env.mode,
      output: {
        filename: "bundle.js"
      },
      plugins: [new HtmlWebpackPlugin()]
    },
    modeConfig(env)
  );
};
