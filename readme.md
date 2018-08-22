# sanitize-tokens

Returns an array of tokens found in the provided strings.

Tokens are separated by whitespace. In HTML, [tokens](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) are used in `class` and `rel` attributes, for example.

## Installation

Requires [Node.js](https://nodejs.org/) 7.0.0 or above.

```bash
npm i sanitize-tokens
```

## API

The module exports a single function.

### Parameters

1. Bindable: `tokens` (string or array): A string of space-separated tokens, or an array (which may contain nested arrays) of such strings.
2. Optional: Object argument:
    * `elseThrow` (boolean, string, or Error): The error to throw if an invalid token is encountered. An `Error` object, if provided, will be thrown as-is. A string will be wrapped in a `TypeError` and thrown. If set to `true`, a `TypeError` will be thrown. Defaults to `false`.
    * `unique` (boolean): Whether to remove duplicate tokens. Defaults to `false`.

### Return Value

An array of tokens.

## Example

```javascript
const sanitizeTokens = require('sanitize-tokens')

sanitizeTokens(['this is', [['a'], 'test']]) // ['this', 'is', 'a', 'test']
```
