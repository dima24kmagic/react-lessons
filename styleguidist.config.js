const path = require("path");
const webpackConfig = require("react-scripts/config/webpack.config");

module.exports = {
  components: "src/components/**/[A-Z]*.js",
  ignore: [
    "**/*.mockdata.js",
    "**/*.test.js",
    "**/*.spec.js",
    "**/__tests__/**"
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/styleguide/Wrapper")
  },
  webpackConfig,
  // Fixes error "Cannot read property 'endsWith' of undefined"
  // appearing when building the styleguide
  // https://github.com/facebook/create-react-app/issues/5486#issuecomment-441090648
  dangerouslyUpdateWebpackConfig(config) {
    return {
      ...config,
      output: {
        ...config.output,
        publicPath: ""
      }
    };
  }
};
