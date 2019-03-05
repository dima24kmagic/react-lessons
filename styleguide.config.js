const webpackConfig = require('react-scripts/config/webpack.config.dev')
const path = require('path')

const TITLE = 'React Lessons'
const PORT = parseInt(process.env.PORT || 6060, 10)

module.exports = {
  title: TITLE,
  serverPort: PORT,
  skipComponentsWithoutExample: true,
  components: ['src/app/components/**/[A-Z]*.js'],
  ignore: [
    '**/index.js',
    '**/*.mockdata.js',
    '**/*.test.js',
    '**/*.spec.js',
    '**/__tests__/**',
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/app/styleguide/Wrapper'),
  },
  webpackConfig,
  // webpackConfig,
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
