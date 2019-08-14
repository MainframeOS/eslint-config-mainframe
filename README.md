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

- `mainframe/ava` when using [AVA](https://github.com/avajs/ava) for tests.
- `mainframe/jest` when using [Jest](https://jestjs.io/) for tests.
- `mainframe/jest-puppeteer` when using [Jest](https://jestjs.io/) with [jest-puppeteer](https://github.com/smooth-code/jest-puppeteer) for tests (extends `mainframe/jest`).
- `mainframe/electron` when using [Electron](https://electronjs.org/).
- `mainframe/flow` when using [Flow](https://flow.org/).
- `mainframe/react` when using [React](https://reactjs.org).
- `mainframe/react-native` when using [React Native](https://facebook.github.io/react-native/) (extends `mainframe/react`).
- `mainframe/react-native-web` when using [React Native for Web](https://github.com/necolas/react-native-web) (extends `mainframe/react-native`).
- `mainframe/typescript` when using [TypeScript](https://www.typescriptlang.org/).

The [Prettier configuration](https://prettier.io/docs/en/configuration.html) can be imported from the `eslint-config-mainframe/prettier.config` module.

## License

MIT.\
See [LICENSE](LICENSE) file.
