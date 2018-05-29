# eslint-config-mainframe

Shared ESLint configuration for Mainframe projects.

## Installation

```sh
# eslint and prettier must be installed as well if not already
yarn add --dev eslint prettier
yarn add --dev eslint-config-mainframe
```

## Usage

In your project's `.eslintrc.js` file (or alternative configuration), add to the `extends` array:

```js
module.exports = {
  extends: ['mainframe'],
}
```

Additional configurations are also available:

* `mainframe/ava` when using [AVA](https://github.com/avajs/ava) for tests.
* `mainframe/jest` when using [Jest](https://facebook.github.io/jest/) for tests.
* `mainframe/react` when using [React](https://reactjs.org).
* `mainframe/react-native` when using [React Native](https://facebook.github.io/react-native/) as an addition to `mainframe/react`.
* `mainframe/react-native-web` when using [React Native for Web](https://github.com/necolas/react-native-web) as an addition to `mainframe/react-native`.

The [Prettier configuration](https://prettier.io/docs/en/configuration.html) can be imported from the `eslint-config-mainframe/prettier.config` module.

## License

MIT.\
See [LICENSE](LICENSE) file.
