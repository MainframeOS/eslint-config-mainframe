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
* `mainframe/react` when using [React](https://reactjs.org).

The [Prettier configuration](https://prettier.io/docs/en/configuration.html) can be imported from the `eslint-config-mainframe/prettier.config` module.

## License

MIT.\
See [LICENSE](LICENSE) file.
