module.exports = {
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  parser: "babel-eslint",
  rules: {
    semi: ['error', 'never'],

    'function-paren-newline': 'off',

    'object-curly-newline': ['error', { consistent: true }],

    // Used in saga while(true) loops
    'no-continue': 'off',

    // React rules
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],

    // Import rules
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
  },
  env: {
    browser: true,
    jest: true,
  },
}
