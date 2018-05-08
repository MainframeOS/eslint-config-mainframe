module.exports = {
  env: {
    node: true,
  },
  extends: ['plugin:flowtype/recommended', 'prettier', 'prettier/flowtype'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['flowtype', 'prettier'],
  rules: {
    'prettier/prettier': ['error', require('./prettier.config')],
  },
}
