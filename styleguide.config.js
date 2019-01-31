const path = require('path')
const webpackConfig = require('react-scripts/config/webpack.config.dev')
const docGen = require('react-docgen')

module.exports = {
  propsParser(filePath, source, resolver, handlers) {
    return docGen.parse(source, resolver, handlers)
  },
  components: 'src/app/components/**/*.js',
  ignore: [
    '**/*.mockdata.js',
    '**/*.test.js',
    '**/*.spec.js',
    '**/__tests__/**',
  ],
  // styleguideComponents: {
  //   Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  // },
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
