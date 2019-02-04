const webpackConfig = require('react-scripts/config/webpack.config.dev')

module.exports = {
  components: 'src/app/components/**/*.js',
  handlers: componentPath => {
    require('react-docgen').defaultHandlers.concat(
      require('react-docgen-external-proptypes-handler')(componentPath),
      require('react-docgen-displayname-handler').createDisplayNameHandler(
        componentPath,
      ),
    )
  },
  ignore: [
    '**/index.js',
    '**/*.mockdata.js',
    '**/*.test.js',
    '**/*.spec.js',
    '**/__tests__/**',
  ],
  webpackConfig,
  // Fixes error "Cannot read property 'endsWith' of undefined"
  // appearing when building the styleguide
  // https://github.com/facebook/create-react-app/issues/5486#issuecomment-441090648
  dangerouslyUpdateWebpackConfig(config) {
    return {
      ...config,
      output: {
        ...config.output,
        publicPath: '',
      },
    }
  },
}
