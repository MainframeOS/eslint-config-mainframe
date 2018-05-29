module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:react/recommended', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
}
