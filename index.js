module.exports = {
  env: {
    node: true,
  },
  extends: [
    'plugin:flowtype/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/flowtype',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['flowtype', 'import', 'prettier'],
  rules: {
    'prettier/prettier': ['error', require('./prettier.config')],
  },
}
