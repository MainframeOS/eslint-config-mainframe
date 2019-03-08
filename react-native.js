module.exports = {
  env: {
    'react-native/react-native': true,
  },
  extends: [
    'plugin:import/react-native',
    'plugin:react-native/all',
    'mainframe/react',
  ],
  plugins: ['react-native'],
  rules: {
    'react-native/sort-styles': 'off',
  },
}
